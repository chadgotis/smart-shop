import { combineReducers } from "redux";
import dishReducer from "./dishButtonReducer";

const Reducers = combineReducers({
  Dishes: dishReducer,
});
export default Reducers;
