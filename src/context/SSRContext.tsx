import React, { useContext, type ReactNode } from "react";

export type SSRContextValue = { [key: string]: unknown };

const SSRContext = React.createContext<SSRContextValue | null>(null);

export function SSRContextProvider({
  children,
  context,
}: {
  readonly children: ReactNode;
  readonly context: SSRContextValue;
}): ReactNode {
  return <SSRContext.Provider value={context}>{children}</SSRContext.Provider>;
}

export function useSSRContext(): SSRContextValue | null {
  const context = useContext(SSRContext);
  return context;
}
