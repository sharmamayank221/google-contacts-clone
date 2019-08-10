import React from "react";
import Form from "../../Forms/CreateContactForm.component";
import "./modal-styles.css";

const Popup = ({ toggleModal }) => {
  return (
    <div className="popup-modal">
      <div className="modal-close" onClick={toggleModal}>
        &times;
      </div>
      <div className="bg-white w-40 h-50">
        <Form cancle={toggleModal} />
      </div>
    </div>
  );
};

export default Popup;
