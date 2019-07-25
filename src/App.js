import React from "react";
import ContactList from "./components/contactlist/ContactList.component";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import SideBar from "./components/Sidebar/SideBar.component";

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
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(response => response.json())
      .then(users => this.setState({ contacts: users }));
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
      return u.name;
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
