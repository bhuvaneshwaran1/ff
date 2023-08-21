import React, { useState } from 'react';
import InputComponent from '../../Common/InputComponent';
import { LoginValidation } from '../../Validation/CommonValidation';
import Buttons from '../../Common/Buttons';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../redux/action';
import {useDispatch} from 'react-redux';
const Login = () => {

    const dispatch = useDispatch();
    const initialValues = { email: '', password: '' }
    const [loginForm, setLoginForm] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const[errors,setErrors] = useState('')
    const [isSubmit, setIsSubmit] = useState(false);

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
            console.log(registeredUsers,"kkk")
            const matchedUser = registeredUsers.find(
              (user) => user.email === loginForm.email && user.password === loginForm.password
            );
            if (matchedUser) {
              dispatch(loginUser(matchedUser));
               navigate('/dashboard')
            } else {
                setErrors('Invalid credentials')
            }
           } 
    }

    return (
        <div className='container'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div>
                    Invalid credentials
                </div>
            ) : (
                <pre>{JSON.stringify(loginForm)}</pre>
            )}
            <form>
                Login page
                <InputComponent
                    label="Email"
                    type="email"
                    name="email"
                    value={loginForm.email}
                    error={formErrors.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                />

                <div className="password_field">
                    <InputComponent
                        label="Password"
                        type="password"
                        name="password"
                        value={loginForm.password}
                        error={formErrors.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
                </div>
                <Buttons
                    type="button"
                    label="Login"
                    onClick={handleSubmit} />
{/*                 {formErrors.login && <p className="error">{formErrors.login}</p>} */}

                <p className='account_reg'>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    )
}
export default Login