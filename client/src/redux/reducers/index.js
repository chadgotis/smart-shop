import { combineReducers } from "redux";
import dishReducer from "./dishButtonReducer";
import checkOutReducer from "./checkOutReducer";

const Reducers = combineReducers({
  Dishes: dishReducer,
  toggle: checkOutReducer,
});
export default Reducers;
