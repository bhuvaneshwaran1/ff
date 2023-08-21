import { REGISTER_USER,LOGIN_USER,LOGOUT_USER } from "./actionCreator"

export const registeredUser = (user) => {
    console.log(user,"hhhhhhhhhhhhhhh")
    return {
        type:REGISTER_USER,
        payload:user
    }

}

export const loginUser = (user) => {
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