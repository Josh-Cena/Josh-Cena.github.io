import React, { useContext } from "react";

export type SSRContextValue = { [key: string]: unknown };

const SSRContext = React.createContext<SSRContextValue | null>(null);

export function SSRContextProvider({
  children,
  context,
}: {
  readonly children: React.ReactNode;
  readonly context: SSRContextValue;
}): JSX.Element {
  return <SSRContext.Provider value={context}>{children}</SSRContext.Provider>;
}

export function useSSRContext(): SSRContextValue | null {
  const context = useContext(SSRContext);
  return context;
}
