export const loadComp = (text) => {
  return {
    type: "LOAD_COMP",
    payload: text,
  };
};

export const setSidebar = (text) => {
  return {
    type: "SET_SIDEBAR",
    payload: text,
  };
};

export const expandForm = () => {
  return {
    type: "SET_FORM",
  };
};

export const setIndexSidebar = () => {
  return {
    type: "INDEX_SIDEBAR",
  };
};

export const getUser = (user) => {
  return {
    type: "SET_USER",
    payload: user.uid,
  };
};
