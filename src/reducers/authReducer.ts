import { UserCredential } from "firebase/auth";

export const authReducer = (
  state: UserCredential | null,
  action: { type: "Login" | "Logout"; payload: any }
) => {
  switch (action.type) {
    case "Login":
      return action.payload;

    case "Logout":
      return null;

    default:
      return state;
  }
};
