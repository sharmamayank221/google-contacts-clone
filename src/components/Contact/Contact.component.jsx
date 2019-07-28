import React from "react";

import "./Contact.styles.css";

const Contact = props => {
  const { name, phone, email, image } = props.contact;
  return (
    <div className="wrapper">
      <div className="contact-name">
        <img src={image} alt="profile-img" className="pro-pic" />
        <h6>{name}</h6>
      </div>
      <div className="phone">
        <h6>{phone}</h6>
      </div>
      <h6>{email}</h6>
    </div>
  );
};

export default Contact;
