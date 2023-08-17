import { combineReducers } from "redux";
import reducerSignUp from "./reducerSignup";
import reducerPersonalInfo from "./reducerPersonal";
import reducerEducationInfo from "./reducerEducationInfo";

const rootReducer = combineReducers({
    reducer1 : reducerSignUp,
    reducer2 : reducerPersonalInfo,
    reducer3 : reducerEducationInfo  
})

export default rootReducer