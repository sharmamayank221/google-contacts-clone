import React from "react";
import "./SideBar.styles.css";

const SideBar = props => {
  let barClasses = "side-bar";
  if (props.show) {
    barClasses = "side-bar open";
  }
  return (
    <>
      <nav className={barClasses}>
        <ul>
          <li>
            <button>Create Contact</button>
          </li>
          <li>Contacts</li>
          <li>Duplicates</li>
          <li>Settings</li>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
