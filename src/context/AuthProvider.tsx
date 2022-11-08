import { User, UserCredential } from "firebase/auth";
import { createContext, Dispatch, ReactNode } from "react";
import { authContextType } from "../types/authContextType";

export type AuthState = User | null;

const authContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<authContextType> | (() => {});
}>({ state: null, dispatch: () => {} });

const AuthProvider = ({
  state,
  dispatch,
  children,
}: {
  state: AuthState;
  dispatch: Dispatch<{ type: "Login" | "Logout"; payload: any }>;
  children?: ReactNode;
}) => {
  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
export { authContext };
