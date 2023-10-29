import React, { useState, useEffect, useContext, useCallback } from "react";

type ColorMode = "light" | "dark";

type ColorModeContext = {
  colorMode: ColorMode;
  setColorMode: (newValue: ColorMode) => void;
}

const ColorModeContext = React.createContext<ColorModeContext | null>(null);

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
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

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }

  return context;
}
