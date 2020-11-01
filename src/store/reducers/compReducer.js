export const compReducer = (state = "inbox", action) => {
  switch (action.type) {
    case "LOAD_COMP":
      return (state = action.payload);
    default:
      return state;
  }
};
