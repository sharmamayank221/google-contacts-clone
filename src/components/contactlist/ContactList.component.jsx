import React from "react";
import Contact from "../Contact/Contact.component";
import "./ContactList.styles.css";
const ContactList = props => {
  return (
    <>
      <h6 className="contacts-count">Contacts({props.totalContacts.length})</h6>
      <div className="contact-list">
        {props.searchContacts.map(contact => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </div>
    </>
  );
};

export default ContactList;
