import { combineReducers } from "redux";
import reducerSignUp from "./reducerSignup";
import reducerPersonal from "./reducerPersonal";
import reducerEducationInfo from "./reducerEducationInfo";

const rootReducer = combineReducers({
    reducer1 : reducerSignUp,
    reducer2 : reducerPersonal,
    reducer3 : reducerEducationInfo  
})

export default rootReducer