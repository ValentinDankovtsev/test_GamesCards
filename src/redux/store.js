import { combineReducers, createStore, applyMiddleware } from "redux";
import gamesReducer from "./gamesReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({
  gamesPage: gamesReducer,
});

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
