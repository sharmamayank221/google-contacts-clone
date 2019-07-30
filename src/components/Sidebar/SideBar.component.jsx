import React from "react";
import "./SideBar.styles.css";
import NewContactPopup from "../../Forms/ContactPopup/NewContactPopup.component";
export const SideBar = props => {
  let barClasses = "side-bar";
  if (props.show) {
    barClasses = "side-bar open";
  }
  return (
    <>
      <nav className={barClasses}>
        <ul>
          <span>
            {props.children}
          </span>

          <hr className="horizontal-line-sidebar" />
          <div className="center-part">
            <li className="sidebar-li-hover">
              <i className="far fa-user" />
              Contacts
            </li>
            <li className="sidebar-li-hover">
              <i className="far fa-clone" />
              Duplicates
            </li>
            <li className="sidebar-li-hover">
              <i className="fas fa-cog" />
              Settings
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};
