import { object, string } from "yup";

const required_message = `This field is required!!!`;

let contactSchema = object({
  firstName: string().required(required_message),
  lastName: string().required(required_message),
  email: string()
    .email(`Please enter a valid email address`)
    .required(required_message),
  message: string()
    .min(5, `Minimum 5 characters must be entered`)
    .required(required_message),
});

export default contactSchema;
