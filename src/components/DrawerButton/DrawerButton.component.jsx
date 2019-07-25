import React from "react";
import "./DrawerButton.styles.css";

const DrawerButton = props => {
  return (
    <button className="button" onClick={props.trigger}>
      <div className="button-line" />
      <div className="button-line" />
      <div className="button-line" />
    </button>
  );
};

export default DrawerButton;
