import {  combineReducers, createStore } from "redux";
import gamesReducer from './gamesReducer';
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
    gamesPage: gamesReducer,
    form: formReducer
  });
  
  let store = createStore(reducers);
  
  window.store = store;
  
  export default store;
  