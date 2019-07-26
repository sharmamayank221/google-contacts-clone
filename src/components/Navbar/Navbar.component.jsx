import React from "react";
import SearchBox from "../SearchBox/SearchBox.component";
import "./Navbar.styles.css";
import contacts from "../../assets/contacts.png";
import DrawerButton from "../DrawerButton/DrawerButton.component";

const Navbar = props => {
  return (
    <>
      <nav className="navbar ">
        <ul className="list">
          <li>
            <DrawerButton trigger={props.click} />
          </li>
          <img
            src={contacts}
            alt="main menu"
            className="logo"
            height="40"
            width="40"
          />
          <li className="main-text">Contacts</li>
          <li>
            <SearchBox handleChanged={props.handleChange} />
          </li>
        </ul>
        <div className="header">
          <ul className="header-ul">
            <li className="header-li">Name</li>
            <li className="header-li">Phone Number</li>
            <li className="header-li">Email</li>
          </ul>
          <div className="horizontal-line" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
