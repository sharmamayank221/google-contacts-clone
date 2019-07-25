import React from "react";

import "./Contact.styles.css";

const Contact = props => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${
    props.contact.id
  }.jpg`;
  const { name, phone, email } = props.contact;
  return (
    <div className="wrapper">
      <div className="contact-name">
        <img src={url} alt="profile-img" className="pro-pic" />
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
