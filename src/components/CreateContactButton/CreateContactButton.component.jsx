import React from "react";
import "./CreateContactButton.styles.css";

const CreateContactButton = ({ toggleModal }) => {
  return (
    <button onClick={ toggleModal } className="create-contact">
      <span className="fas fa-plus fa-2x" />
      Create Contact
    </button>
  );
};

export default CreateContactButton;
