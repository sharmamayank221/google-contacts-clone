import React from "react";
import Contact from "../Contact/Contact.component";
import "./ContactList.styles.css";
import axios from "axios";

class ContactList extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      searchField: ""
    };
  }

  handleChange = event => {
    return this.setState({
      searchField: event.target.value
    });
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then(response =>
        response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: `${user.email}`,
          id: `${user.login.uuid}`,
          image: `${user.picture.thumbnail}`,
          phone: `${user.phone}`
        }))
      )
      .then(contacts => {
        this.setState({
          contacts
        });
      });
  }
  render() {
    const { contacts, searchField } = this.state;
    const totalContacts = contacts.filter(u => {
      return u.email;
    });

    const filterSearchContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <>
        <h6 className="contacts-count">Contacts({totalContacts.length})</h6>
        <div className="contact-list">
          {filterSearchContacts.map(contact => {
            return <Contact key={contact.id} contact={contact} />;
          })}
        </div>
      </>
    );
  }
}

export default ContactList;
