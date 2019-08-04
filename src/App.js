import React from "react";
import ContactList from "./components/contactlist/ContactList.component";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import { SideBar } from "./components/Sidebar/SideBar.component";
import CreateContactButton from "../src/components/CreateContactButton/CreateContactButton.component";
import Modal from "./components/Modals/modal.component";
import Popup from "../src/components/Modals/popup-modal";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false,
      open: false,
      isModelOpen: false,
      contacts: [],
      searchField: ""
    };
  }

  toggleSideBar = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        showSideBar: !prevState.showSideBar
      };
    });
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isModelOpen: !prevState.isModelOpen
      };
    });
  };

  handleChange = event => {
    return this.setState({
      searchField: event.target.value
    });
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=58")
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
    const { showSideBar, isModelOpen, searchField, contacts } = this.state;
    const totalContacts = contacts.filter(u => {
      return u.email;
    });
    const filterSearchContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div style={{ height: "100%" }}>
        {isModelOpen && (
          <Modal>
            <Popup toggleModal={this.toggleModal} />
          </Modal>
        )}
        <SideBar show={showSideBar} totalcontacts={totalContacts}>
          <CreateContactButton toggleModal={this.toggleModal} />
        </SideBar>

        <Navbar click={this.toggleSideBar} handleChange={this.handleChange} />
        <ContactList
          totalcontacts={totalContacts}
          search={filterSearchContacts}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

export default App;
