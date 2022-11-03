import { combineReducers } from "redux";
//import RegionReduce from "./RegionReducer";
import CountryReduce from "./CountryReducer";
import UsrReducer from "./UsrReducer";

const rootReducer = combineReducers({
    usrStated: UsrReducer,
    countryStated: CountryReduce
    //regionStated: RegionReduce,
})

export default rootReducer