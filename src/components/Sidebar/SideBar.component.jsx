import React from "react";
import "./SideBar.styles.css";
export const SideBar = props => {
  let barClasses = "side-bar";
  if (props.show) {
    barClasses = "side-bar open";
  }
  return (
    <>
      <nav className={barClasses}>
        <ul>
          <span>{props.children}</span>

          <hr className="horizontal-line-sidebar" />
          <div className="center-part">
            <div className="sidebar-contacts">
              <i className="far fa-user" />
              Contacts({props.totalcontacts.length})
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};
