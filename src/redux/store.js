import {  combineReducers, createStore } from "redux";
import gamesReducer from './gamesReducer';
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
    gamesPage: gamesReducer,
    form: formReducer
  });
  
  let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
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