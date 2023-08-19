const CommonValidation = (registerForm) => {
    const errors = {};

    if (!registerForm.fullName) {
        errors.fullName = 'FullName is required.';
    }

    if (!registerForm.email) {
        errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
        errors.email = 'Invalid email format';
    }

    if (!registerForm.password) {
        errors.password = 'Password is required.';
    } else if (registerForm.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
    } else if (registerForm.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors
}

export default CommonValidation