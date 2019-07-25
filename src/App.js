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
      showSideBar: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(response => response.json())
      .then(users => this.setState({ contacts: users }));
  }

  renderTableData() {
    return this.state.contacts.map((user, index) => {
      const { id, name, phone, email } = user;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{phone}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }

  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(u => {
      return u.name;
    });

    return (
      <div style={{ height: "100%" }}>
        <SideBar show={this.state.showSideBar} />
        <Navbar click={this.toggleSideBar} />
        <ContactList
          tableData={this.renderTableData()}
          totalContacts={filteredContacts}
        />
      </div>
    );
  }
}

export default App;
