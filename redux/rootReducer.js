import { combineReducers } from "redux";
import userReducer from "./auth/reducer";
import employeeReducer from "./employee/employeeReducer"

const rootReducer = combineReducers({
    users:userReducer,
    employees:employeeReducer,

})

export default rootReducer