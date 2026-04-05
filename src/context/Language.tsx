import React, { useContext, useMemo, useState, type ReactNode } from "react";

// React 19 does not manage <html> attributes, so we must DIY if we don't use
// react-helmet. The way to do this is:
// 1. lang is declared by route components in meta
// 2. It is synchronously registered in SSR and therefore available in HTML
// 3. In CSR (here), we retrieve this lang from HTML and initialize the context
// 4. Whenever route changes, we update the lang in context, which updates HTML
// All of this is to avoid hydration mismatch: the initial CSR must trust the
// SSR lang.
export type LanguageContextValue = {
  lang: string | undefined;
  setLang: (lang: string) => void;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

export function LanguageContextProvider({
  children,
}: {
  readonly children: ReactNode;
}): ReactNode {
  const [lang, setLang] = useState<string>(
    // In SSR: the placeholder will be replaced after rendering
    // In CSR: initial rendering must trust HTML
    typeof document !== "undefined"
      ? document.documentElement.lang
      : "%ssr-lang%",
  );
  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageContextProvider",
    );
  }
  return context;
}
