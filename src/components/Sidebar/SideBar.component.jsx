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
            <button className="create-contact">
              <span className="fas fa-plus fa-2x" />
              Create Contact
            </button>
          </li>

          <hr className="horizontal-line-sidebar" />
          <div className="center-part">
            <li>
              <i className="far fa-user" />
              Contacts
            </li>
            <li>
              <i className="far fa-clone" />
              Duplicates
            </li>
            <li>
              <i className="fas fa-cog" />
              Settings
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
