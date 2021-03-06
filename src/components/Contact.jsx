import React from "react";
import * as Yup from "yup";
import IMG from "../assets/contact.svg";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
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
      .min(10, "At least ten characters")
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
    <div className="home__contact">
      <div className="home__contact__inner">
        <img src={IMG} alt="" />

        <form onSubmit={contactForm.handleSubmit}>
          <h2 className="section__title">Contact Me</h2>
          <div className="form__group">
            <input
              type="text"
              name="name"
              value={contactForm.values.name}
              onChange={contactForm.handleChange}
            />
            <label>
              {contactForm.errors.name ? contactForm.errors.name : "Name"}
            </label>
          </div>
          <div className="form__group">
            <input
              type="text"
              name="email"
              value={contactForm.values.email}
              onChange={contactForm.handleChange}
            />
            <label>
              {contactForm.errors.email ? contactForm.errors.email : "Email"}
            </label>
          </div>
          <div className="form__group">
            <input
              type="text"
              name="phone"
              value={contactForm.values.phone}
              onChange={contactForm.handleChange}
            />
            <label>
              {contactForm.errors.phone ? contactForm.errors.phone : "Phone"}
            </label>
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
            <label>
              {contactForm.errors.message
                ? contactForm.errors.message
                : "Message"}
            </label>
          </div>
          <button className="btn btn__primary">Send Message</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
