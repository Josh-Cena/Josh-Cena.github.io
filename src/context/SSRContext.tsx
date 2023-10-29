import React, { useContext } from "react";

const SSRContext = React.createContext<Record<string, unknown> | null>(null);

export function SSRContextProvider({ children, context }: { children: React.ReactNode, context: Record<string, unknown> }) {
  return (
    <SSRContext.Provider value={context}>
      {children}
    </SSRContext.Provider>
  );
}

export function useSSRContext() {
  const context = useContext(SSRContext);
  return context;
}
