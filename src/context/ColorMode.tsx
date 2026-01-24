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

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.dataset.colorMode as ColorMode;
    // TODO read from localStorage and system theme
    setColorMode(initialColorValue);
  }, []);

  const syncedSetColorMode = useCallback((newValue: ColorMode) => {
    const root = window.document.documentElement;
    localStorage.setItem("color-mode", newValue);
    setColorMode(newValue);
    root.dataset.colorMode = newValue;
  }, []);

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
