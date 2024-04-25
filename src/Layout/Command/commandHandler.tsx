/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return */
import type { Dispatch, SetStateAction } from "react";
import parseBash from "bash-parser";
import { paths } from "@/routes";

type PathTree = {
  [key: string]: PathTree | null;
};

const pathTree: PathTree = {};

export type Env = { [key: string]: string };

export function cd(url: string, pwd: string): string | null {
  try {
    const newPath = new URL(url.endsWith("/") ? url : `${url}/`, pwd);
    let pwdTree = pathTree;
    for (const part of newPath.pathname.split("/").filter(Boolean)) {
      if (!Object.hasOwn(pwdTree, part)) return null;
      pwdTree = pwdTree[part]!;
    }
    return String(newPath);
  } catch {
    console.error(`Cannot cd to ${url} from ${pwd}`);
    return null;
  }
}

function ls(relative: string, pwd: string): [number, string] {
  let pwdTree = pathTree;
  for (const part of new URL(relative, pwd).pathname
    .split("/")
    .filter(Boolean)) {
    if (!Object.hasOwn(pwdTree, part))
      return [1, `ls: invalid PWD? ${part} not found`];
    pwdTree = pwdTree[part]!;
  }
  return [0, Object.keys(pwdTree).join("\n")];
}

for (const path of paths) {
  const parts = path.split("/").filter(Boolean);
  // Root path
  if (!parts.length) continue;
  let pwdTree = pathTree;
  for (const part of parts) {
    if (!Object.hasOwn(pwdTree, part)) pwdTree[part] = { __proto__: null };
    pwdTree = pwdTree[part]!;
  }
}

export function handleCommand(
  command: string,
  {
    env,
    setEnv,
    lastExit,
    navigate,
  }: {
    env: Env;
    setEnv: Dispatch<SetStateAction<Env>>;
    lastExit: number;
    navigate: (url: string) => void;
  },
): [number, string] {
  try {
    const ast = parseBash(command, {
      resolveAlias(s: string) {
        console.log("Resolving alias", s);
        return s;
      },
      resolveHomeUser(s: string) {
        console.log("Resolving home user", s);
        return "/";
      },
      resolveEnv(s: string) {
        console.log("Resolving env", s);
        return env[s] ?? "";
      },
      resolveParameter(ast: any) {
        console.log("Resolving parameter", ast);
        if (ast.kind === "last-exit-status") return String(lastExit);
        else if (ast.parameter in env) return env[ast.parameter];
        return "";
      },
    });
    if (ast.commands.length !== 1 || ast.commands[0].type !== "Command")
      return [1, "The shell only supports single commands at the moment"];
    const args = ((ast.commands[0].suffix as any[] | undefined) ?? []).filter(
      (s) => s.type === "Word",
    );
    switch (ast.commands[0].name.text) {
      case "cd": {
        if (args.length > 1) return [1, "cd: too many arguments"];
        const newPath = cd(args[0]?.text ?? "/", env.PWD!);
        if (!newPath)
          return [1, `cd: ${args[0]!.text}: No such file or directory`];
        setEnv({
          __proto__: null as never,
          ...env,
          PWD: newPath,
        });
        return [0, ""];
      }
      case "echo":
        return [0, args.map((a) => a.text).join(" ")];
      case "export":
        setEnv({
          __proto__: null as never,
          ...env,
          ...Object.fromEntries(
            args.map((a) =>
              (
                a.text.match(/(?<key>[^=\s]+)=(?<value>.*)/u) ?? [a.text, ""]
              ).slice(1, 3),
            ),
          ),
        });
        return [0, ""];
      case "eval-js":
        if (args.length !== 1)
          return [1, "eval-js requires exactly 1 argument"];
        try {
          let output = "";
          const originalConsoleLog = console.log;
          const originalConsoleWarn = console.warn;
          const originalConsoleError = console.error;
          const originalConsoleInfo = console.info;
          window.console.log = (...values) => {
            output += `${values.join(" ")}\n`;
          };
          window.console.warn = (...values) => {
            output += `${values.join(" ")}\n`;
          };
          window.console.error = (...values) => {
            output += `${values.join(" ")}\n`;
          };
          window.console.info = (...values) => {
            output += `${values.join(" ")}\n`;
          };
          // eslint-disable-next-line no-eval, @typescript-eslint/no-unnecessary-condition
          const res = eval?.(args[0]?.text ?? "");
          window.console.log = originalConsoleLog;
          window.console.warn = originalConsoleWarn;
          window.console.error = originalConsoleError;
          window.console.info = originalConsoleInfo;
          return [0, `${output}${String(res)}`];
        } catch (e) {
          return [1, String(e)];
        }
      case "help":
        return [
          0,
          `Available commands:

  cd [dir]
  echo [arg ...]
  eval-js [code]
  export [name[=value] ...]
  help
  ls [dir]
  open [url]
  pwd
`,
        ];
      case "ls":
        if (args.length > 1) {
          let res = "";
          for (const arg of args) {
            const [code, msg] = ls(arg.text, env.PWD!);
            if (code !== 0) return [code, msg];
            res += `${arg.text}:\n${msg}\n\n`;
          }
          return [0, res.trim()];
        }
        return ls(args[0]?.text ?? ".", env.PWD!);
      case "open":
        if (args.length > 1) return [1, "open: too many arguments"];
        navigate(new URL(args[0]?.text ?? ".", env.PWD).pathname);
        return [0, ""];
      case "pwd":
        return [0, env.PWD!];
      default:
        return [127, `${ast.commands[0].name.text}: command not found`];
    }
  } catch (e) {
    return [1, String(e)];
  }
}
