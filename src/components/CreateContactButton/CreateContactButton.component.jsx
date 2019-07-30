import React from "react";
import "./CreateContactButton.styles.css";

const CreateContactButton = props => {
  console.log(props);
  return (
    <button onClick={props.onClick} className="create-contact">
      <span className="fas fa-plus fa-2x" />
      Create Contact
    </button>
  );
};

export default CreateContactButton;
