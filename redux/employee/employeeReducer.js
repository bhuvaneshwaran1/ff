import { EMPLOYEE_DETAILS } from "../types";

const initialState = {
    employeeDetails: [],
  };
  
  const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case EMPLOYEE_DETAILS:
        console.log(action.payload,"employee dataaaaa")
        state = {
          ...state,
          employeeDetails: action.payload,
        }
      
      default:
        state = {...state}
        break 
    }
        return state;
    
  };
  
  export default employeeReducer;
  