import { REGISTER_USER,LOGIN_USER,LOGOUT_USER } from "../types"

export const registeredUser = (user) => {
    console.log(user,"registerData")
    return {
        type:REGISTER_USER,
        payload:user
    }
}

export const loginUser = (user) => {
    console.log(user,"logggg")
    return {
        type:LOGIN_USER,
        payload:user
    }
}

export const logoutUser = () => {
    console.log("logout")
    return {
      type: LOGOUT_USER,
    };
  };






