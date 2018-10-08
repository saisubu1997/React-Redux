import { combineReducers } from "redux";
import tempreducers from "./reducer-user";
import Activeuserreducer from "./reducer-active-user";

const singleallreducers = combineReducers({
  students: tempreducers,
  activeuser: Activeuserreducer
  //movies : tempmoviereducers
});

export default singleallreducers;
