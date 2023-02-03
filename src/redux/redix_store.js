import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import cells_reducer from './cells_reducer';

let reducers=combineReducers({
  cellsState:cells_reducer
})
let store=createStore(reducers,applyMiddleware(thunk));
window.store=store;
export default store;