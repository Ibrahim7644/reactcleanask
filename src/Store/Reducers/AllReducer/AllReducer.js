import isLogged from "../Login/IsLogged";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    IsLogged : isLogged
})
export default allReducer;