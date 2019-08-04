import React from "react";

import { FaAddressCard } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import "./CreateContactForm.styles.css";

const ContactForm = () => {
  return (
    <form className="form">
      <div className="header-form">
        <div className="header-title">Create new contact</div>
      </div>
      <div className="names">
        <FaAddressCard style={{ width: 40, height: 25 }} />
        <div className="name">
          <input type="text" name="firstname" className="input" />
          <label>Fisrt name</label>
        </div>
        <div className="last-name">
          <input type="text" name="lastname" className="input" />
          <label>Last name</label>
        </div>
      </div>
      <div className="comp-job">
        <MdCall style={{ width: 40, height: 30 }} />
        <div className="company">
          <input type="number" name="mobile" className="input" />
          <label> Mobile </label>
        </div>
        <div className="title">
          <input type="number" name="phone" className="input" />
          <label>Home</label>
        </div>
      </div>
      <div className="email">
        <IoIosMail style={{ width: 40, height: 30 }} />
        <div>
          <input type="email" name="email" className="email-input" />
          <label>Email </label>
        </div>
      </div>
      <div className="phone">
        <TiUserAdd style={{ width: 40, height: 30 }} />
        <div className="input-label">
          <input type="text" name="phone" className="phone-input" />
          <label> Group</label>
        </div>
      </div>
      <div className="bottom" />
      <button type="submit" className="save-button">
        save
      </button>
    </form>
  );
};

export default ContactForm;
