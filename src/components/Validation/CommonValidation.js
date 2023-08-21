export const RegisterValidation = (registerForm) => {
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

    if (!registerForm.confirmPassword) {
        errors.confirmPassword = 'Confirm password is required';
      } else if (registerForm.confirmPassword !== registerForm.password) {
        errors.confirmPassword = 'Passwords do not match';
      }

    if (!registerForm.gender) {
        errors.gender = 'Please select a gender';
      }
  
      if (!registerForm.birthDate) {
        errors.birthDate = 'Birth date is required';
      }

      if (!registerForm.agreeTerms) {
        errors.agreeTerms = 'You must agree to the terms & conditions';
      }

    return errors
}

export const LoginValidation = (loginForm) => {
  
  const errors = {};

  if (!loginForm.email) {
    errors.email = 'Email is required.';
} else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
    errors.email = 'Invalid email format';
}
if (!loginForm.password) {
    errors.password = 'Password is required.';
} else if (loginForm.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
} else if (loginForm.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
}
return errors
}