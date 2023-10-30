import React, { useContext } from "react";

const SSRContext = React.createContext<Record<string, unknown> | null>(null);

export function SSRContextProvider({
  children,
  context,
}: {
  readonly children: React.ReactNode;
  readonly context: Record<string, unknown>;
}): JSX.Element {
  return <SSRContext.Provider value={context}>{children}</SSRContext.Provider>;
}

export function useSSRContext(): Record<string, unknown> | null {
  const context = useContext(SSRContext);
  return context;
}
