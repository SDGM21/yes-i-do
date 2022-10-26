import { createContext, Dispatch, ReactNode } from "react";

const authContext = createContext<{
  state: any;
  dispatch: Dispatch<{ type: "Login" | "Logout"; payload: any }> | (() => {});
}>({ state: null, dispatch: () => {} });

const AuthProvider = ({
  state,
  dispatch,
  children,
}: {
  state: any;
  dispatch: Dispatch<{ type: "Login" | "Logout"; payload: any }>;
  children?: any;
}) => {
  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
export { authContext };
