import { combineReducers } from "redux"
import countReducer from "./countReducer"
const reducers = combineReducers(
  { count : countReducer}
)
  
  export default reducers

