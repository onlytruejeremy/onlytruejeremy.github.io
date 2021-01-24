import React from "react";
import "./Contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = (props) => {
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "At least three characters")
      .max(20, "At most twenty characters")
      .required("Name is Required"),
    email: Yup.string()
      .min(6, "At least three characters")
      .max(40, "At most twenty characters")
      .email("Must Be A Valid Email")
      .required("Email is Required"),
    phone: Yup.string()
      .min(10, "Phone Must Be 10 Characters")
      .max(10, "At most 10 characters")
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "Use a valid phone number"
      )
      .required("Phone is Required"),
    message: Yup.string()
      .min(30, "At least thirty characters")
      .max(200, "At most two hundred characters")
      .required("Message is Required"),
  });
  const contactForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm }) => {
      const payload = values;
      const config = {
        method: "POST",
        url: "https://formspree.io/f/mleoabrb",
        data: payload,
        crossdomain: true,
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        await axios(config);
        toast.info("Message Sent");
        resetForm();
      } catch (error) {
        toast.error("Could Not Send Message");
      }
    },
  });
  return (
    <div className="contact__container" id="contact">
      <div className="contact__inner">
        <h2 className="form__title">Get In Touch</h2>
        <form onSubmit={contactForm.handleSubmit}>
          <div className="form__group">
            <input
              type="text"
              name="name"
              value={contactForm.values.name}
              onChange={contactForm.handleChange}
            />
            <label>Name</label>
            <span className="error__message">{contactForm.errors.name}</span>
          </div>
          <div className="form__group">
            <input
              type="text"
              name="email"
              value={contactForm.values.email}
              onChange={contactForm.handleChange}
            />
            <label>Email</label>
            <span className="error__message">{contactForm.errors.email}</span>
          </div>
          <div className="form__group">
            <input
              type="text"
              name="phone"
              value={contactForm.values.phone}
              onChange={contactForm.handleChange}
            />
            <label>Phone</label>
            <span className="error__message">{contactForm.errors.phone}</span>
          </div>
          <div className="form__group">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              value={contactForm.values.message}
              onChange={contactForm.handleChange}
            ></textarea>
            <label>Message</label>
            <span className="error__message">{contactForm.errors.message}</span>
          </div>
          <button className="btn darken">Send Message</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
