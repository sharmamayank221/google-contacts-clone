import React from "react";

import { render } from "react-dom";
import { withFormik, Form, Field } from "formik";

import { FaAddressCard } from "react-icons/fa";
import { IoIosBriefcase, IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";

import "./CreateContactForm.styles.css";

const ContactForm = ({ values, handleChange, handleSubmit }) => {
  return (
    <Form className="form">
      <div className="header">
        <div className="header-title">Create new contact</div>
      </div>
      <div className="names">
        <FaAddressCard style={{ width: 40, height: 40 }} />
        <div className="name">
          <Field type="text" name="firstname" className="input" />
          <label>Fisrt name</label>
        </div>
        <div className="last-name">
          <Field type="text" name="lastname" className="input" />
          <label>Last name</label>
        </div>
      </div>
      <div className="comp-job">
        <IoIosBriefcase style={{ width: 40, height: 30 }} />
        <div className="company">
          <Field type="text" name="company" className="input" />
          <label> Company</label>
        </div>
        <div className="title">
          <Field type="text" name="title" className="input" />
          <label>Job title</label>
        </div>
      </div>
      <div className="email">
        <IoIosMail style={{ width: 40, height: 30 }} />
        <div>
          <Field type="email" name="email" className="email-input" />
          <label>Email </label>
        </div>
      </div>
      <div className="phone">
        <MdCall style={{ width: 40, height: 30 }} />
        <div className="input-label">
          <Field type="number" name="phone" className="phone-input" />
          <label> Phone</label>
        </div>
      </div>
      <div className="bottom" />
      <button type="submit" className="save-button">
        save
      </button>
    </Form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      firstname: "",
      lastname: "",
      company: "",
      title: "",
      email: "",
      phone: ""
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(ContactForm);

render(<FormikApp />, document.getElementById("root"));

export default ContactForm;
