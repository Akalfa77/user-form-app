export const validateName = (value) => {
  if (value.trim() === "") {
    return { isValid: false, error: "Name is required" };
  }

  const namePatten = /^[A-Za-z\s]+$/;
  if (!namePatten.test(value)) {
    return { isValid: false, error: "Name is Invalid" };
  }

  return { isValid: "true", error: "" };
};

export const validateEmail = (value) => {
  if (value.trim() === "") {
    return { isValid: false, error: "Email is required" };
  }

  const emailPatten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPatten.test(value)) {
    return { isValid: false, error: "Email is Invalid" };
  }

  //   const isDuplicate = existingEmails.some(
  //     (email) => email.toLowerCase() === value.toLowerCase(),
  //   );

  //   if (isDuplicate) {
  //     return { isValid: false, error: "Email already exists" };
  //   }

  return { isValid: "true", error: "" };
};

export const validatePhone = (value) => {
  if (value.trim() === "") {
    return { isValid: false, error: "Phone is required" };
  }

  const namePatten = /^[6-9][0-9]{9}$/;
  if (!namePatten.test(value)) {
    return { isValid: false, error: "Phone is Invalid" };
  }

  return { isValid: "true", error: "" };
};

export const validateGender = (value) => {
  if (!value) {
    return { isValid: false, error: "Select your Gender" };
  }
  return { isValid: "true", error: "" };
};

export const validatePassword = (value) => {
  if (value === "") {
    return { isValid: false, error: "Password is required" };
  }

  if (value.length < 6 || value.length > 20) {
    return {
      isValid: false,
      error: "Password must be 6-20 characters long",
    };
  }

  const hasUppercase = /[A-Z]/.test(value);
  if (!hasUppercase) {
    return {
      isValid: false,
      error: "Password must contain at least one uppercase letter",
    };
  }

  const hasLowercase = /[a-z]/.test(value);
  if (!hasLowercase) {
    return {
      isValid: false,
      error: "Password must contain at least one lowercase letter",
    };
  }

  const hasNumber = /[0-9]/.test(value);
  if (!hasNumber) {
    return {
      isValid: false,
      error: "Password must contain at least one number",
    };
  }

  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  if (!hasSpecialChar) {
    return {
      isValid: false,
      error: "Password must contain at least one special character",
    };
  }
  return { isValid: "true", error: "" };
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (confirmPassword === "") {
    return { isValid: false, error: "Please enter you password again here" };
  }

  if (password !== confirmPassword) {
    return { isValid: false, error: "Password do not match" };
  }
  return { isValid: "true", error: "" };
};

export const validateCar = (value) => {
  if (!value || value === "") {
    return { isValid: false, error: "Please select your fav car" };
  }

  return { isValid: "true", error: "" };
};

export const validateTerms = (checked) => {
  if (!checked) {
    return { isValid: false, error: "Accept Terms & Conditions" };
  }
  return { isValid: "true", error: "" };
};

export const validateCGPA = (value) => {
  return { isValid: true, error: "" };
};
