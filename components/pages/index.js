import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/action";
import { useNavigate } from "react-router-dom";
import Buttons from "../Common/Buttons";
import Toastify, { showToast } from '../Common/Toastify'

export const Dashboard = () => {

  const registeredUsers = useSelector((state) => state?.users?.loggedInuser)
  const employeeDetails = useSelector((state) => state?.employees?.employeeDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    //localStorage.removeItem('registeredUsers');
    localStorage.removeItem('accessToken');
    navigate('/')
    showToast('Logout successfully', 'info');
  };

  return (
    <div className="container">

      <h2>Dashboard Page</h2>
      <h3>Welcome:{registeredUsers?.fullName}</h3>
      <h3>Registered Users:{registeredUsers?.email}</h3>

      <ul>
        {employeeDetails?.map((employee) => (
          <li key={employee.id}> {employee.name} - {employee.position}
          </li>
        ))}
      </ul>

      <Buttons onClick={handleLogout} label="Logout" />
      {/* <Toastify /> */}
    </div>
  )
}