import React from "react";
import { useFormik } from "formik";

const Contact = () => {
  // const formik = useFormik({
  const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));
      console.log(values);
      bag.resetForm();
    },
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
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
