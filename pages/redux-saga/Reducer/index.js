import { combineReducers } from "redux";
import RegionReduce from "./RegionReducer";
import UsrReducer from "./UsrReducer";

const rootReducer = combineReducers({
    usrStated: UsrReducer,
    regionStated: RegionReduce,
})

export default rootReducer