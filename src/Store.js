import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import PexelReducer from "../src/Reducer/PexelReducer";
const root = combineReducers({ PexelReducer });
const store = createStore(root, composeWithDevTools());
export default store;
