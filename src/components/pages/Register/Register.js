import { useState, useEffect } from 'react';
import InputComponent from '../../Common/InputComponent';
import {RegisterValidation} from '../../Validation/CommonValidation';
import Buttons from '../../Common/Buttons';
import { Link,useNavigate } from 'react-router-dom';
import RadioComponent from '../../Common/RadioComponent';
import Datepickers from '../../Common/Datepickers';
import InputwithIcon from '../../Common/InputwithIcon';
import CheckBoxComponent from '../../Common/CheckBoxComponent';
import { registeredUser } from '../../../redux/action';
import {useDispatch} from 'react-redux';

const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
];

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialValues = { fullName: '', email: '', password: '', confirmPassword: '', gender: '', birthDate: '', agreeTerms: false }
    const [registerForm, setRegisterForm] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
   
    const handleChange = (field, value) => {
        setRegisterForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleCheckboxChange = (field, value) => {
        setRegisterForm((prev) => ({
          ...prev,
          [field]: value,
        }));
      };

    const handleSubmit = e => {
        e.preventDefault();
        const ValidationErrors = RegisterValidation(registerForm)
        setFormErrors(ValidationErrors)
        setIsSubmit(true);

      if (Object.keys(ValidationErrors).length === 0) {
        dispatch(registeredUser(registerForm));
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        localStorage.setItem('registeredUsers', JSON.stringify([...registeredUsers, registerForm]));
        navigate('/')
      }
    };

    return (
        <div className='container'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div>
                    Error fields are some missing

                </div>
            ) : (
                <pre>{JSON.stringify(registerForm)}</pre>
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
                    <RadioComponent
                        label="Gender"
                        options={genderOptions}
                        radioSelect={registerForm.gender}
                        onChange={(value) => handleChange('gender', value)}
                        error={formErrors.gender}
                    />
                    <Datepickers
                        label="Birth Date"
                        value={registerForm.birthDate}
                        onChange={(e) => handleChange('birthDate', e.target?.value)}
                        error={formErrors.birthDate}
                    />
            
                    <InputwithIcon
                        label="Password"
                        type="password"
                        name="password"
                        value={registerForm.password}
                        error={formErrors.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
                
                    <InputwithIcon
                        label="Confirm Password"
                        type="password"
                        value={registerForm.confirmPassword}
                        onChange={(e) => handleChange('confirmPassword', e.target.value)}
                        error={formErrors.confirmPassword}
                    />
               
               <CheckBoxComponent
                   label="I agree to the terms & conditions"
                   checked={registerForm.agreeTerms}
                   onChange={(e) => handleCheckboxChange('agreeTerms', e.target.checked)}
                   error={formErrors.agreeTerms} />
                
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