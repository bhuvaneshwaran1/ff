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

    if (!registerForm.address) {
        errors.address = 'Enter the address';
    }

    if (!registerForm.role) {
        errors.role = 'Select the role';
    }

    if(!registerForm.mobile) {
        errors.mobile = "Enter the Mobile Number"
    } else if(registerForm.mobile.length < 10) {
        errors.mobile ="Please enter a valid 10-digit mobile number";
    }

    return errors
}

export const LoginValidation = (loginForm) => {

    const errors = {};

   /*   if (!loginForm.email) {  */
   /*       errors.email = 'Email is required.';  */
   /*   } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {  */
   /*       errors.email = 'Invalid email format';  */
   /*  }  */

    if (!loginForm.password) {
        errors.password = 'Password is required.';
    } else if (loginForm.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
    } else if (loginForm.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
    }
    
    if(!loginForm.emailorMobile) {
        errors.emailorMobile = 'Enter email or Mobile number';
    }  /* else if (!/\S+@\S+\.\S+/.test(loginForm.emailorMobile)) { */
       /*  errors.emailorMobile = 'Invalid email format';   }  */
       else if(loginForm.emailorMobile?.length < 10){
      errors.emailorMobile ="Please enter a valid 10-digit mobile number";
      }

   /*   if(!loginForm.mobile) {  */
   /*       errors.mobile = "Enter the Mobile Number";  */
   /*   } else if(loginForm.mobile.length < 10) {  */
   /*       errors.mobile ="Please enter a valid 10-digit mobile number";  */
   /*   }  */
    return errors
}


/* export const isValidEmail = (email) => { */
/*    */
/*     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; */
/*     return emailRegex.test(email); */
/*   }; */
/*    */
/*   export const isValidPhoneNumber = (phoneNumber) => { */
/*     */
/*     const phoneRegex = /^\d{10}$/;  */
/*     return phoneRegex.test(phoneNumber); */
/*   }; */
/*    */