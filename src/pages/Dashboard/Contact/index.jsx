import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";
import "./styles.css";

const Contact = () => {
  // const formik = useFormik({
  const { handleSubmit, handleChange, values, isSubmitting, errors } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
      onSubmit: async (values, bag) => {
        // await new Promise((r) => setTimeout(r, 1000));
        console.log(values);

        bag.resetForm();
      },
      validationSchema,
    });
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Adem"
            value={values.firstName}
            onChange={handleChange("firstName")}
            disabled={isSubmitting}
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Caliskan"
            value={values.lastName}
            onChange={handleChange("lastName")}
            disabled={isSubmitting}
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="adem@adm.com"
            value={values.email}
            type="email"
            onChange={handleChange("email")}
            disabled={isSubmitting}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={values.message}
            type="message"
            onChange={handleChange("message")}
            disabled={isSubmitting}
          />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
