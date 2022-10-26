export const authReducer = (
  state: any,
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
