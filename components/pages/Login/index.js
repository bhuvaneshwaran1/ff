import React, { useState } from 'react';
import InputComponent from '../../Common/InputComponent';
import { LoginValidation } from '../../validation/commonValidation';
import Buttons from '../../Common/Buttons';
import  { showToast } from '../../Common/Toastify'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../redux/auth/action';
import {useDispatch} from 'react-redux';
import { getEmployeeDetails } from '../../../redux/employee/action';
const Login = () => {

    const dispatch = useDispatch();
    const initialValues = { emailorMobile: '', password: '' }
    const [loginForm, setLoginForm] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    //const[errors,setErrors] = useState('')
    const [isSubmit, setIsSubmit] = useState(false);
    const [accessToken, setAccessToken] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    const navigate = useNavigate();
    const handleChange = (field, value) => {
        setFormErrors({...formErrors,[field]:''})
        setLoginForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault();
         const ValidationLoginErrors = LoginValidation(loginForm) 
        setFormErrors(ValidationLoginErrors) 
        setIsSubmit(true);
           if (Object.keys(ValidationLoginErrors).length === 0) {  
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || []
            localStorage.setItem('accessToken', accessToken);
            console.log(registeredUsers,"kkk")
           
            const employeeDetails = [
                { id: 1, name: 'John Doe', position: 'Software Engineer' },
                { id: 2, name: 'Jane Smith', position: 'Product Manager' },
              ];
          
            const matchedUser = registeredUsers.find(
              (user) => (user.email === loginForm.emailorMobile ||  user.mobile === loginForm.emailorMobile) && user.password === loginForm.password
            );
            if (matchedUser) {
                setCurrentUser(matchedUser)
                dispatch(getEmployeeDetails(employeeDetails))
              dispatch(loginUser(matchedUser));
              showToast('Login successful', 'success');
             
               navigate('/dashboard')
            } else {
                //setErrors('Invalid credentials')
                //setFormErrors({login:'Invalid credentials!!!'})
                showToast('Login failed', 'error');
            }
            }  
    }

    return (
        <div className='container'>
            {Object.keys(formErrors)?.length === 0 && isSubmit ? (
                <div>
                   Invalid Credentials
                </div>
            ) : (
                <pre>{JSON.stringify(loginForm)}</pre>
            )}
            <form>
                Login page
                <InputComponent
                    label="Email"
            
                    type={loginForm.emailorMobile.includes('@')? 'email' : 'tel'}
                    //type={loginForm.emailorMobile === 'email' ? 'email' : 'tel' }
                    name="emailorMobile"
                    value={loginForm.emailorMobile}
                    error={formErrors.emailorMobile}
                    onChange={(e) => handleChange('emailorMobile', e.target.value,)}
                    placeholder="Enter Email or Mobile"
                />

                <div className="password_field">
                    <InputComponent
                        label="Password"
                        type="password"
                        name="password"
                        value={loginForm.password}
                        error={formErrors.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        placeholder="Enter password"
                    />
                </div>
                <Buttons
                    type="button"
                    label="Login"
                    onClick={handleSubmit} />
                 {formErrors.login && <p className="error">{formErrors.login}</p>} 
                
                <p className='account_reg'>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    )
}
export default Login