import React from "react";
import ContactList from "./components/contactlist/ContactList.component";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import { SideBar } from "./components/Sidebar/SideBar.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false
    };
  }

  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    const { showSideBar } = this.state;
    return (
      <div style={{ height: "100%" }}>
        <SideBar show={showSideBar} />
        <Navbar click={this.toggleSideBar} handleChange={this.handleChange} />
        <ContactList />
      </div>
    );
  }
}

export default App;
