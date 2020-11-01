export const sidebarReducer = (state = "hide", action) => {
  switch (action.type) {
    case "SET_SIDEBAR":
      return (state = action.payload);
    default:
      return state;
  }
};

export const indexSidebarReducer = (state = false, action) => {
  switch (action.type) {
    case "INDEX_SIDEBAR":
      return (state = !state);
    default:
      return state;
  }
};
