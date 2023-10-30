import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";

type ColorMode = "light" | "dark";

type ColorModeContext = {
  colorMode: ColorMode;
  setColorMode: (newValue: ColorMode) => void;
};

const Context = React.createContext<ColorModeContext | null>(null);

export function ColorModeProvider({
  children,
}: {
  readonly children: React.ReactNode;
}): JSX.Element {
  const [colorMode, rawSetColorMode] = useState<ColorMode>("light");

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.dataset.colorMode as ColorMode;
    // TODO read from localStorage and system theme
    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = useCallback((newValue: ColorMode) => {
    const root = window.document.documentElement;
    localStorage.setItem("color-mode", newValue);
    rawSetColorMode(newValue);
    root.dataset.colorMode = newValue;
  }, []);

  const contextVal = useMemo(
    () => ({ colorMode, setColorMode }),
    [colorMode, setColorMode],
  );

  return <Context.Provider value={contextVal}>{children}</Context.Provider>;
}

export function useColorMode(): ColorModeContext {
  const context = useContext(Context);
  if (!context)
    throw new Error("useColorMode must be used within a ColorModeProvider");

  return context;
}
