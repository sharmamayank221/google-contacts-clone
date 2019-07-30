import React from "react";
import Popup from "reactjs-popup";
import ContactList from "./components/contactlist/ContactList.component";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import { SideBar } from "./components/Sidebar/SideBar.component";
import { FaAddressCard } from "react-icons/fa";
import { IoIosBriefcase, IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import CreateContactButton from "../src/components/CreateContactButton/CreateContactButton.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false,
      open: false
    };
  }

  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { showSideBar } = this.state;
    return (
      <div style={{ height: "100%" }}>
        <SideBar show={showSideBar}>
          <CreateContactButton onClick={this.openModal} />
        </SideBar>
        <Navbar click={this.toggleSideBar} handleChange={this.handleChange} />
        <ContactList />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div
              className="modal"
              style={{ position: "relative", display: "flex" }}
            >
              <a className="close" onClick={this.closeModal} href="#">
                &times;
              </a>
              <form className="form">
                <div className="header">
                  <div className="header-title">Create new contact</div>
                </div>
                <div className="names">
                  <FaAddressCard style={{ width: 40, height: 40 }} />
                  <div className="name">
                    <input type="text" name="firstname" className="input" />
                    <label>Fisrt name</label>
                  </div>
                  <div className="last-name">
                    <input type="text" name="lastname" className="input" />
                    <label>Last name</label>
                  </div>
                </div>
                <div className="comp-job">
                  <IoIosBriefcase style={{ width: 40, height: 30 }} />
                  <div className="company">
                    <input type="text" name="company" className="input" />
                    <label> Company</label>
                  </div>
                  <div className="title">
                    <input type="text" name="title" className="input" />
                    <label>Job title</label>
                  </div>
                </div>
                <div className="email">
                  <IoIosMail style={{ width: 40, height: 30 }} />
                  <div>
                    <input type="email" name="email" className="email-input" />
                    <label>Email </label>
                  </div>
                </div>
                <div className="phone">
                  <MdCall style={{ width: 40, height: 30 }} />
                  <div className="input-label">
                    <input type="number" name="phone" className="phone-input" />
                    <label> Phone</label>
                  </div>
                </div>
                <div className="bottom" />
                <button type="submit" className="save-button">
                  save
                </button>
              </form>
            </div>
          </Popup>
        </div>
      </div>
    );
  }
}

export default App;
