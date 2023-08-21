import { useSelector,useDispatch } from "react-redux";
import { logoutUser } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import Buttons from "../Common/Buttons";
export const Dashboard = () => {

    const registeredUsers = useSelector((state) => state?.loggedInuser)
    
    const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
       navigate('/')
      };

    return (
        <div className="container">

            <h2>Dashboard Page</h2>
          <h3>Welcome:{registeredUsers?.fullName}</h3>
            <h3>Registered Users:{registeredUsers?.email}</h3>
            <Buttons onClick={handleLogout} label="Logout" />
        </div>
    )
}