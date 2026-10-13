import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";

export type ColorMode = "light" | "dark";

type ColorModeContext = {
  colorMode: ColorMode;
  setColorMode: (newValue: ColorMode) => void;
};

const Context = React.createContext<ColorModeContext | null>(null);

export function ColorModeProvider({
  children,
}: {
  readonly children: ReactNode;
}): ReactNode {
  const [colorMode, setColorMode] = useState<ColorMode>("light");

  const syncedSetColorMode = useCallback((newValue: ColorMode) => {
    const root = window.document.documentElement;
    setColorMode(newValue);
    root.dataset.colorMode = newValue;
    try {
      localStorage.setItem("color-mode", newValue);
    } catch {
      // Keep color mode working when storage is unavailable.
    }
  }, []);

  useEffect(() => {
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");
    let initialColorMode: ColorMode = systemPreference.matches
      ? "dark"
      : "light";
    try {
      const storedColorMode = localStorage.getItem("color-mode");
      if (storedColorMode === "light" || storedColorMode === "dark")
        initialColorMode = storedColorMode;
    } catch {
      // Fall back to the system preference when storage is unavailable.
    }
    syncedSetColorMode(initialColorMode);

    const syncSystemPreference = (event: MediaQueryListEvent) => {
      syncedSetColorMode(event.matches ? "dark" : "light");
    };
    systemPreference.addEventListener("change", syncSystemPreference);
    return () => {
      systemPreference.removeEventListener("change", syncSystemPreference);
    };
  }, [syncedSetColorMode]);

  const contextVal = useMemo(
    () => ({ colorMode, setColorMode: syncedSetColorMode }),
    [colorMode, syncedSetColorMode],
  );

  return <Context.Provider value={contextVal}>{children}</Context.Provider>;
}

export function useColorMode(): ColorModeContext {
  const context = useContext(Context);
  if (!context)
    throw new Error("useColorMode must be used within a ColorModeProvider");

  return context;
}
