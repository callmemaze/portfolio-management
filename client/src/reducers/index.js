import { combineReducers } from "redux";

import name from "./name";
import order from "./order";
import auth from "./auth";
import holder from "./holder";
export default combineReducers({ name, order, auth, holder });
