import { LOGIN_USER, REGISTER_USER,LOGOUT_USER } from "../types";

const initialState = {
    
    registeredUsers: [],
    loggedInuser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
   
        case REGISTER_USER:

            state = {
                ...state,
                registeredUsers:action.payload,
                
            }
            break

        case LOGIN_USER:
            console.log(action.payload,"IIIIIIIIIIIII")
            state = {
                ...state,
                loggedInuser: action.payload,
            };
         break
         case LOGOUT_USER:
            console.log(LOGOUT_USER,"logout")
            state= {
              ...state,
              loggedInUser: null,
            };
        default:
            state = { ...state }
            break
    }
    return state
}

export default userReducer