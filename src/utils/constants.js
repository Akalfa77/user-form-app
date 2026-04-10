export const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  password: "",
  confirmPassword: "",
  car: "",
  cgpa: 5,
  terms: false,
};

export const CAR_OPTIONS = [
  { value: "", label: "Select your favorite car" },
  { value: "volvo", label: "Volvo" },
  { value: "saab", label: "Saab" },
  { value: "fiat", label: "Fiat" },
  { value: "audi", label: "Audi" },
  { value: "ferrari", label: "Ferrari" },
];

export const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];
