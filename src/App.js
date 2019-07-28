import React from "react";
import ContactList from "./components/contactlist/ContactList.component";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import SideBar from "./components/Sidebar/SideBar.component";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      showSideBar: false,
      searchField: ""
    };
  }

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

  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  handleChange = event => {
    return this.setState({
      searchField: event.target.value
    });
  };

  render() {
    const { contacts, showSideBar, searchField } = this.state;
    const totalContacts = contacts.filter(u => {
      return u.email;
    });
    const filterSearchContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div style={{ height: "100%" }}>
        <SideBar show={showSideBar} />
        <Navbar click={this.toggleSideBar} handleChange={this.handleChange} />
        <ContactList
          contacts={contacts}
          totalContacts={totalContacts}
          searchContacts={filterSearchContacts}
        />
      </div>
    );
  }
}

export default App;
