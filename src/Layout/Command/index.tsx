import React, { type ReactNode, useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { handleCommand, cd } from "./commandHandler";
import CommandButton from "./CommandButton";
import styles from "./index.module.css";

function CommandInput(
  {
    pwd,
    onEnter,
    onClear,
    onFocus,
    onBlur,
  }: {
    readonly pwd: string;
    readonly onEnter: (input: string, line: ReactNode) => void;
    readonly onClear: () => void;
    readonly onFocus: () => void;
    readonly onBlur: () => void;
  },
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const prompt = (
    <span className={styles.prompt}>
      <span className={styles.promptPath}>
        {new URL(pwd).pathname.split("/").findLast(Boolean) || "/"}
      </span>
      $&nbsp;
    </span>
  );
  return (
    <>
      {prompt}
      <span style={{ flexGrow: 1 }}>
        <input
          ref={ref}
          className={styles.cleanInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onEnter(
                e.currentTarget.value,
                <>
                  {prompt}
                  {e.currentTarget.value}
                </>,
              );
              e.currentTarget.value = "";
            } else if (e.key === "k" && e.metaKey) {
              onClear();
            } else if (e.key === "ArrowUp") {
              if (cmdHistoryIndex > 0) cmdHistoryIndex--;
              e.currentTarget.value = cmdHistory[cmdHistoryIndex] ?? "";
            } else if (e.key === "ArrowDown") {
              if (cmdHistoryIndex < cmdHistory.length) cmdHistoryIndex++;
              e.currentTarget.value = cmdHistory[cmdHistoryIndex] ?? "";
            }
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </span>
    </>
  );
}

const CommandInputWithRef = React.forwardRef(CommandInput);

const cmdHistory: string[] = [];
let cmdHistoryIndex = 0;

export default function Command(): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputHasFocus, setInputHasFocus] = useState(false);
  const [mouseInBox, setMouseInBox] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<number | null>(null);
  const [env, setEnv] = useState<Record<string, string>>({
    __proto__: null as never,
    PWD: cd(location.pathname, "https://joshcena.com")!,
  });
  const [lastExit, setLastExit] = useState(0);
  const [children, setChildren] = useState<(readonly [number, ReactNode])[]>(
    [],
  );
  const navigate = useNavigate();
  useEffect(() => {
    setEnv((e) => ({
      __proto__: null as never,
      ...e,
      PWD: cd(location.pathname, e.PWD!)!,
    }));
  }, [location]);
  useEffect(() => {
    if (expanded) {
      inputRef.current?.focus();
      setInputHasFocus(true);
    }
  }, [expanded]);
  useEffect(() => {
    if (!inputHasFocus && !mouseInBox)
      timeoutRef.current = window.setTimeout(() => setExpanded(false), 1000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inputHasFocus, mouseInBox]);
  return (
    <div
      className={clsx(styles.inputBox, expanded && styles.inputBoxExpanded)}
      onMouseEnter={() => setMouseInBox(true)}
      onMouseLeave={() => setMouseInBox(false)}>
      {expanded ? (
        <div className={styles.inputContent}>
          <pre style={{ margin: 0 }}>
            {children.map(([i, c]) => (
              <div key={i} className={styles.inputRow}>
                {c}
              </div>
            ))}
            <div className={styles.inputRow}>
              <CommandInputWithRef
                ref={inputRef}
                pwd={env.PWD!}
                // eslint-disable-next-line react/jsx-no-bind
                onEnter={(input, line) => {
                  const [code, output] = handleCommand(input, {
                    env,
                    setEnv,
                    lastExit,
                    navigate,
                  });
                  setChildren((c) => [
                    ...c,
                    ...[line, output]
                      .filter(Boolean)
                      .map((o, i) => [c.length + i, o] as const),
                  ]);
                  cmdHistory.push(input);
                  cmdHistoryIndex = cmdHistory.length;
                  setLastExit(code);
                }}
                // eslint-disable-next-line react/jsx-no-bind
                onClear={() => setChildren([])}
                // eslint-disable-next-line react/jsx-no-bind
                onFocus={() => setInputHasFocus(true)}
                // eslint-disable-next-line react/jsx-no-bind
                onBlur={() => setInputHasFocus(false)}
              />
            </div>
          </pre>
        </div>
      ) : (
        // eslint-disable-next-line react/jsx-no-bind
        <CommandButton onClick={() => setExpanded(true)} />
      )}
    </div>
  );
}
