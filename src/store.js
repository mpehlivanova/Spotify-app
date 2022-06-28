import { createStore } from "redux";
import { combineReducers } from "redux";
import userReducer from "./redusers/userReducer";
import dataReducer from "./redusers/dataReducer";

const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
});


const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;