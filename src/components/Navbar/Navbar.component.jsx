import React from "react";
import SearchBox from "../SearchBox/SearchBox.component";
import "./Navbar.styles.css";
import contacts from "../../assets/contacts.png";
import DrawerButton from "../DrawerButton/DrawerButton.component";

const Navbar = props => {
  return (
    <nav className="navbar">
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
        <li>Contacts</li>
        <li>
          <SearchBox />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
