import React from "react";

import "./CustomButton.styles.css";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="save-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
