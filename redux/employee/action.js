import { EMPLOYEE_DETAILS } from "../types"

export const getEmployeeDetails = (details) => {
    console.log(details,"employeeee data")
    return {
        type:EMPLOYEE_DETAILS,
        payload:details
    }
} 