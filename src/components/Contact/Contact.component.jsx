import React from "react";
import { FiEdit2 } from "react-icons/fi";
import "./Contact.styles.css";

const Contact = props => {
  const { name, phone, email, image } = props.contact;
  return (
    <div className="wrapper">
      <div className="contact-name">
        <img src={image} alt="profile-img" className="pro-pic" />
        <span>{name}</span>
      </div>
      <div className="fone">
        <h6 className="h6-fone">{phone}</h6>
      </div>
      <div className="mail">
        <h6>{email}</h6>
      </div>
      <div className="edit">
        <span className="edit-icon">
          <FiEdit2 onClick={props.toggleModal} />
        </span>
      </div>
    </div>
  );
};

export default Contact;
