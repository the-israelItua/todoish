import { combineReducers } from "redux";
import { compReducer } from "./compReducer";
import { sidebarReducer, indexSidebarReducer } from "./sidebarReducer";
import { formReducer } from "./formReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  comp: compReducer,
  sidebar: sidebarReducer,
  formExpand: formReducer,
  indexSidebar: indexSidebarReducer,
  user: userReducer,
});

export default reducers;
