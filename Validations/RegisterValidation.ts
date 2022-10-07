import * as yup from "yup";


const RegisterValidation = yup.object({
  full_name: yup
    .string()
    .matches(/^[a-zA-Z\s]{4,30}$/, {
      message: "Name should have 4-30 characters, and contain only alphabets.",
      excludeEmptyString: true,
    })
    .required("A full name is required."),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("An email address is required."),
  password: yup
    .string()
    .matches(
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/,
      {
        message:
          "Password must not contain any whitespaces, must have at least one uppercase letter, one lowercase character, one digit, one special character, and must be 10-16 characters long.",
        excludeEmptyString: true,
      }
    )
    .required("Password is required."),
  phone_no: yup
    .string()
    .matches(/^[0-9]{8,15}$/, {
      message: "Phone number should be between 8-15 digits long.",
      excludeEmptyString: true,
    })
    .required("A phone number is required."),
  birthdate: yup
    .string()
    .matches(
      /^[0-9-()]+$/,
      {
        message: "Birthdate must be in the format DD-MM-YYYY.",
        excludeEmptyString: true,
      }
    )
    .required("Birthdate is required."),
  gender: yup
    .string()
    .matches(/(Male|Female)/, {
      message: "A gender is required.",
      excludeEmptyString: true,
    })
    .required("A gender is required."),
});

export default RegisterValidation;
