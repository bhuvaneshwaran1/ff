import { useState, useEffect } from 'react';
import InputComponent from '../../Common/InputComponent';
import CommonValidation from '../../Validation/CommonValidation';
import Buttons from '../../Common/Buttons';
import { Link } from 'react-router-dom';
const Register = () => {

    const initialValues = { fullName: '', email: '', password: '' }
    const [registerForm, setRegisterForm] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (field, value) => {
        //const { name, value } = e.target;
        setRegisterForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const ValidationErrors = CommonValidation(registerForm)
        setFormErrors(ValidationErrors)
        setIsSubmit(true);
        console.log(registerForm, "JJJJ")
    }

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(registerForm);
            localStorage.setItem('registeredUser', JSON.stringify(registerForm))
        }
    }, [formErrors]);

    return (
        <div className='container'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div>
                    Registered Successfully

                </div>
            ) : (
                <pre>{JSON.stringify(registerForm, undefined, 2)}</pre>
            )}
            <form>
                Register page

                <InputComponent
                    label="Name"
                    type="text"
                    name="fullName"
                    value={registerForm.fullName}
                    error={formErrors.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                />

                <InputComponent
                    label="Email"
                    type="email"
                    name="email"
                    value={registerForm.email}
                    error={formErrors.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                />

                <div className="password_field">
                    <InputComponent
                        label="Password"
                        type="password"
                        name="password"
                        value={registerForm.password}
                        error={formErrors.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
                </div>
                <Buttons
                    type="button"
                    label="Submit"
                    onClick={handleSubmit} />

                <p className='account_reg'>
                    <Link to="/">Back</Link>
                </p>

            </form>
        </div>
    )
}
export default Register