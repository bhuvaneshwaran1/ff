import React, { useState } from 'react';
import InputComponent from '../../Common/InputComponent';
import CommonValidation from '../../Validation/CommonValidation';
import Buttons from '../../Common/Buttons';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {


    const initialValues = { email: '', password: '' }
    const [loginForm, setLoginForm] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();
    const handleChange = (field, value) => {
        //const { name, value } = e.target;
        setLoginForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const ValidationErrors = CommonValidation(loginForm)
        setFormErrors(ValidationErrors)
        setIsSubmit(true);
        if (Object.keys(ValidationErrors).length === 0) {
            const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
            if (
                registeredUser &&
                registeredUser.email === loginForm.email &&
                registeredUser.password === loginForm.password
            ) {
                console.log('Login successful:', loginForm);
                navigate('/dashboard');
            } else {
                setFormErrors({ login: 'Invalid email or password.' });
            }
        }
        console.log(loginForm, "Loginform")
    }

    return (
        <div className='container'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div>
                    Login Successfully

                </div>
            ) : (
                <pre>{JSON.stringify(loginForm, undefined, 1)}</pre>
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
                {formErrors.login && <p className="error">{formErrors.login}</p>}

                <p className='account_reg'>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    )
}
export default Login