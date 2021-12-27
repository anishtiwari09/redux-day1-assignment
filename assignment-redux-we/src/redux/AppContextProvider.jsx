import { createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children, store }) {
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}
