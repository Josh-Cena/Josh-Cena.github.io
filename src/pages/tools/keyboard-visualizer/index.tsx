import { useCallback, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import clsx from "clsx";
import Heading from "@/components/Heading";
import Link from "@/components/Link";
import styles from "./index.module.css";

function MapManager({
  currentMap,
  setCurrentMap,
  addMap,
  deleteMap,
  maps,
}: {
  readonly currentMap: string | undefined;
  readonly setCurrentMap: (s: string) => void;
  readonly addMap: (s: string) => void;
  readonly deleteMap: (s: string) => void;
  readonly maps: string[];
}): JSX.Element {
  return (
    <div className={styles.mapManager}>
      <button
        className={styles.mapButton}
        type="button"
        onClick={(e) => {
          // Safari does not focus buttons on click
          (e.target as HTMLElement).focus();
        }}>
        {currentMap ?? "Select a map..."}
      </button>
      <div className={styles.mapListContainer}>
        <input
          type="text"
          placeholder="Add a new map (press Enter to confirm)"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addMap((e.target as HTMLInputElement).value);
              (e.target as HTMLInputElement).value = "";
            }
            e.stopPropagation();
          }}
        />
        <ul className={styles.mapList}>
          {maps.map((s) => (
            <li key={s} className={styles.mapItem}>
              <button
                type="button"
                className={styles.mapItemButton}
                onClick={(e) => {
                  setCurrentMap(s);
                  (e.target as HTMLElement).blur();
                }}>
                {s}
              </button>
              <button
                type="button"
                className={styles.mapItemDeleteButton}
                onClick={() => deleteMap(s)}
                aria-label="Delete this map">
                –
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type KeyboardMap = {
  [code: string]: [string | null, string | null, string | null, string | null];
};

function Keys({
  keys,
  keysPressed,
  keyboardMap,
  index,
}: {
  readonly keys: string[];
  readonly keysPressed: string[];
  readonly keyboardMap: KeyboardMap | undefined;
  readonly index: 0 | 1 | 2 | 3;
}) {
  return keys.map((s) => {
    const key = keyboardMap?.[s]?.[index];
    return (
      <span
        key={s}
        title={s}
        className={clsx(
          styles.key,
          styles.squareKey,
          keysPressed.includes(s) && styles.keyPressed,
          (key === null || key === undefined || key === "Unidentified") &&
            styles.keyUnknown,
          key === "Dead" && styles.keyDead,
        )}>
        {["Dead", "Unidentified"].includes(key!) ? null : key}
      </span>
    );
  });
}

function KeyboardMapTable({
  keyboardMap,
}: {
  readonly keyboardMap: KeyboardMap;
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Unmodified</th>
          <th>
            <kbd>Shift</kbd>
          </th>
          <th>
            <kbd>Alt</kbd>
          </th>
          <th>
            <kbd>Shift</kbd> + <kbd>Alt</kbd>
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(keyboardMap).map(([code, keys]) => (
          <tr key={code}>
            <td>
              <kbd>{code}</kbd>
            </td>
            {keys.map((s, i) => (
              <td
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                className={
                  s === "Dead"
                    ? styles.keyDead
                    : s === "Unidentified" || !s
                      ? styles.keyUnknown
                      : undefined
                }>
                {s ?? "?"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function LetterToKey({ keyboardMap }: { readonly keyboardMap: KeyboardMap }) {
  const letterToKey: [string, JSX.Element][] = [];
  for (const [code, keys] of Object.entries(keyboardMap)) {
    if (keys[0] && !["Unidentified", "Dead"].includes(keys[0]))
      // eslint-disable-next-line react/jsx-key
      letterToKey.push([keys[0], <kbd>{code}</kbd>]);
    if (keys[1] && !["Unidentified", "Dead"].includes(keys[1])) {
      letterToKey.push([
        keys[1],
        // These are not to be rendered as a list
        // eslint-disable-next-line react/jsx-key
        <>
          <kbd>Shift</kbd> + <kbd>{code}</kbd>
        </>,
      ]);
    }
    if (keys[2] && !["Unidentified", "Dead"].includes(keys[2])) {
      letterToKey.push([
        keys[2],
        // eslint-disable-next-line react/jsx-key
        <>
          <kbd>Alt</kbd> + <kbd>{code}</kbd>
        </>,
      ]);
    }
    if (keys[3] && !["Unidentified", "Dead"].includes(keys[3])) {
      letterToKey.push([
        keys[3],
        // eslint-disable-next-line react/jsx-key
        <>
          <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>{code}</kbd>
        </>,
      ]);
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Letter</th>
          <th>Key</th>
        </tr>
      </thead>
      <tbody>
        {letterToKey
          .sort((a, b) => a[0].localeCompare(b[0], "en-US"))
          .map(([letter, key]) => (
            <tr key={letter}>
              <td>{letter}</td>
              <td>{key}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default function Keyboard(): JSX.Element {
  const [index, setIndex] = useState<0 | 1 | 2 | 3>(0);
  const [keyboardMaps, setKeyboardMaps] = useLocalStorageState<{
    [mapName: string]: KeyboardMap;
  }>("keyboardMaps", {
    defaultValue: {},
  });
  const [error, setError] = useState<string | null>(null);
  const [keysPressed, setKeysPressed] = useState<string[]>([]);
  const [currentMap, setCurrentMap] = useState<string | undefined>(undefined);
  const keyboardMap =
    currentMap === undefined ? undefined : keyboardMaps[currentMap];
  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      setKeysPressed((k) => [...k, e.code]);
      // prettier-ignore
      if (["Backspace", "CapsLock", "ContextMenu", "Control", "Enter", "Fn", "Meta", " ", "Tab"].includes(e.key))
        return;
      if (e.key === "Shift") {
        setIndex((i) => (i === 2 ? 3 : 1));
      } else if (e.key === "Alt") {
        setIndex((i) => (i === 1 ? 3 : 2));
      } else {
        setKeyboardMaps((k) => {
          setError(null);
          if (!currentMap) {
            setError("No map selected");
            return k;
          }
          if (!Object.hasOwn(k, currentMap)) {
            setError("Unexpected: modifying an unknown key map");
            return k;
          }
          const i = (e.shiftKey ? 1 : 0) + (e.altKey ? 2 : 0);
          const key = k[currentMap]![e.code]?.[i];
          if (key !== null && key !== undefined && key !== e.key) {
            setError(
              "You are modifying a key that is already mapped. Consider creating a new map.",
            );
            return k;
          }
          if (e.key === "Dead")
            setError("Note: composite keys are not supported");
          if (e.key === "Unidentified")
            setError("Note: this key is not recognized by the browser");
          k[currentMap]![e.code] ??= [null, null, null, null];
          k[currentMap]![e.code]![i] = e.key;
          return { ...k };
        });
      }
    };
    const onKeyup = (e: KeyboardEvent) => {
      setKeysPressed((k) => k.filter((s) => s !== e.code));
      if (e.key === "Shift") setIndex((i) => (i === 3 ? 2 : 0));
      else if (e.key === "Alt") setIndex((i) => (i === 3 ? 1 : 0));
    };
    window.addEventListener("keydown", onKeydown);
    window.addEventListener("keyup", onKeyup);
    return () => {
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("keyup", onKeyup);
    };
  }, [setKeyboardMaps, currentMap]);

  const addMap = useCallback(
    (s: string) => {
      setKeyboardMaps((k) => {
        if (Object.hasOwn(k, s)) {
          setError("Map already exists");
          return k;
        }
        k[s] = {};
        return { ...k };
      });
      setCurrentMap(s);
    },
    [setKeyboardMaps],
  );
  const deleteMap = useCallback(
    (s: string) => {
      setCurrentMap((c) => {
        console.log(c, s);
        if (c !== s) return c;
        const [firstMap, secondMap] = Object.keys(keyboardMaps);
        if (firstMap === c) return secondMap;
        return firstMap;
      });
      setKeyboardMaps((k) => {
        if (!(s && Object.hasOwn(k, s))) {
          setError("Unexpected: deleting an unknown key map");
          return k;
        }
        delete k[s];
        return { ...k };
      });
    },
    [keyboardMaps, setKeyboardMaps],
  );

  return (
    <div>
      <h1>Keyboard visualizer</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
        <MapManager
          currentMap={currentMap}
          setCurrentMap={setCurrentMap}
          addMap={addMap}
          deleteMap={deleteMap}
          maps={Object.keys(keyboardMaps)}
        />
        <div style={{ color: "var(--color-red)" }}>{error}</div>
      </div>
      <div className={styles.keyboard}>
        <div className={styles.keyRow}>
          <Keys
            // prettier-ignore
            keys={["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal"]}
            index={index}
            keyboardMap={keyboardMap}
            keysPressed={keysPressed}
          />
          <span
            className={clsx(
              styles.key,
              styles.longKey,
              keysPressed.includes("Backspace") && styles.keyPressed,
            )}>
            Backspace
          </span>
        </div>
        <div className={styles.keyRow}>
          <span
            className={clsx(
              styles.key,
              styles.longKey,
              keysPressed.includes("Tab") && styles.keyPressed,
            )}>
            Tab
          </span>
          <Keys
            // prettier-ignore
            keys={["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"]}
            index={index}
            keyboardMap={keyboardMap}
            keysPressed={keysPressed}
          />
        </div>
        <div className={styles.keyRow}>
          <span
            className={clsx(
              styles.key,
              styles.longKey,
              keysPressed.includes("CapsLock") && styles.keyPressed,
            )}>
            Caps lock
          </span>
          <Keys
            // prettier-ignore
            keys={["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote"]}
            index={index}
            keyboardMap={keyboardMap}
            keysPressed={keysPressed}
          />
          <span
            className={clsx(
              styles.key,
              styles.longKey,
              keysPressed.includes("Enter") && styles.keyPressed,
            )}>
            Enter
          </span>
        </div>
        <div className={styles.keyRow}>
          <span
            className={clsx(
              styles.key,
              styles.longKey,
              keysPressed.includes("ShiftLeft") && styles.keyPressed,
            )}>
            Shift
          </span>
          <Keys
            // prettier-ignore
            keys={["KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash"]}
            index={index}
            keyboardMap={keyboardMap}
            keysPressed={keysPressed}
          />
          <span
            className={clsx(
              styles.key,
              styles.longKey,
              keysPressed.includes("ShiftRight") && styles.keyPressed,
            )}>
            Shift
          </span>
        </div>
      </div>
      <p>
        After creating or selecting a map, press any key to record its mapping.
        You can also hold <kbd>Shift</kbd> or <kbd>Option</kbd> to record those
        compound keys.
      </p>
      <p>
        The key codes displayed in <code>&lt;kbd&gt;</code> (such as{" "}
        <kbd>KeyA</kbd>) are{" "}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code">
          standard
        </Link>{" "}
        codes, which typically correspond to the keys on a US keyboard. You can
        hover over any key in the diagram above to see its code.
      </p>
      {keyboardMap && (
        <>
          <Heading level={2}>Keyboard map</Heading>
          <KeyboardMapTable keyboardMap={keyboardMap} />
          <Heading level={2}>Key search</Heading>
          <LetterToKey keyboardMap={keyboardMap} />
        </>
      )}
    </div>
  );
}

export const meta = {
  title: "Keyboard visualizer",
  description: "A tool that visualizes your keyboard layout",
};
