import React from "react";
import Contact from "../Contact/Contact.component";
import "./ContactList.styles.css";

const ContactList = ({ search, totalcontacts, toggleModal }) => {
  return (
    <>
      <h6 className="contacts-count">Contacts({totalcontacts.length})</h6>
      <div className="contact-list">
        {search.map(contact => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              toggleModal={toggleModal}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContactList;
