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

function useFormValidation(formData, existingEmails = [], touchedFields = {}) {
  const errors = useMemo(() => {
    return {
      name: touchedFields.name ? validateName(formData.name).error : "",
      email: touchedFields.email
        ? validateEmail(formData.email, existingEmails).error
        : "",
      phone: touchedFields.phone ? validatePhone(formData.phone).error : "",
      gender: touchedFields.gender ? validateGender(formData.gender).error : "",
      password: touchedFields.password
        ? validatePassword(formData.password).error
        : "",
      confirmPassword: touchedFields.confirmPassword
        ? validateConfirmPassword(formData.password, formData.confirmPassword)
            .error
        : "",
      car: touchedFields.car ? validateCar(formData.car).error : "",
      cgpa: validateCGPA(formData.cgpa).error,
      terms: touchedFields.terms ? validateTerms(formData.terms).error : "",
    };
  }, [formData, existingEmails, touchedFields]);

  const isValid = useMemo(() => {
    return (
      validateName(formData.name).isValid &&
      validateEmail(formData.email, existingEmails).isValid &&
      validatePhone(formData.phone).isValid &&
      validateGender(formData.gender).isValid &&
      validatePassword(formData.password).isValid &&
      validateConfirmPassword(formData.password, formData.confirmPassword)
        .isValid &&
      validateCar(formData.car).isValid &&
      validateCGPA(formData.cgpa).isValid &&
      validateTerms(formData.terms).isValid
    );
  }, [formData, existingEmails]);

  return { errors, isValid };
}

export default useFormValidation;
