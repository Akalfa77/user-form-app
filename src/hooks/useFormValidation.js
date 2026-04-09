import { useMemo } from "react";
import {
  validateCar,
  validateConfirmPassword,
  validateEmail,
  validateGender,
  validateName,
  validatePassword,
  validatePhone,
  validateTerms,
  validateCGPA,
} from "../utils/validation";

function useFormValidation(formData) {
  const errors = useMemo(() => {
    return {
      name: validateName(formData.name).error,
      email: validateEmail(formData.email).error,
      phone: validatePhone(formData.phone).error,
      gender: validateGender(formData.gender).error,
      password: validatePassword(formData.password).error,
      confirmPassword: validateConfirmPassword(
        formData.password,
        formData.confirmPassword,
      ).error,
      car: validateCar(formData.car).error,
      cgpa: validateCGPA(formData.cgpa).error,
      terms: validateTerms(formData.terms).error,
    };
  }, [formData]);

  const isValid = useMemo(() => {
    return (
      validateName(formData.name).isValid &&
      validateEmail(formData.email).isValid &&
      validatePhone(formData.phone).isValid &&
      validateGender(formData.gender).isValid &&
      validatePassword(formData.password).isValid &&
      validateConfirmPassword(formData.password, formData.confirmPassword)
        .isValid &&
      validateCar(formData.car).isValid &&
      validateCGPA(formData.cgpa).isValid &&
      validateTerms(formData.terms).isValid
    );
  }, [formData]);

  return { errors, isValid };
}

export default useFormValidation;
