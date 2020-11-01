export const formReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_FORM":
      return (state = !state);
    default:
      return state;
  }
};
