import {  combineReducers, createStore,applyMiddleware } from "redux";
import gamesReducer from './gamesReducer';
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    gamesPage: gamesReducer,
    form: formReducer
  });
  
  let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
  
  window.store = store;
  
  export default store;


 const obj = {
    data : [{
            "name": "2 For 2: Connect the Numbers Puzzle",
            "icon_url": "https:\/\/lh3.googleusercontent.com\/cz-P6elsDLzExhnSHzRKbSmfhIFGm203Fe9qFDpnkEpMWovLpUa6ni9b24YzVq0R2II4"
        }, {
            "name": "A Girl Adrift",
            "icon_url": "https:\/\/lh3.googleusercontent.com\/nAu8v5gmXjzgVdgwih6z95GYsQad8RwRH0_28rYNC5fV8Jf2O3GDo1cOpcMhpDcEEQ"
        }]
      } 