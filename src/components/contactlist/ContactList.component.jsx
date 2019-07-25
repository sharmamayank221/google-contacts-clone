import React from "react";
import Navbar from "../Navbar/Navbar.component";
import "./ContactList.styles.css";
const ContactList = props => {
  return (
    <>
      <div className="horizontal-line" />
      <div className="table-dimension">
        <table className="table table-hover table-borderless">
          <thead>
            <tr>
              <th scope="col">{`Contacts(${props.totalContacts.length})`}</th>
              <th scope="col">Name</th>
              <th scope="col">Phone number</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tr />

          <tbody>{props.tableData}</tbody>
        </table>
      </div>
    </>
  );
};

export default ContactList;
