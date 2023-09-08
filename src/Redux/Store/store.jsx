import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import CardReducer from "./../Reducer/cardReducer";
export const store = createStore(CardReducer, composeWithDevTools()) 
