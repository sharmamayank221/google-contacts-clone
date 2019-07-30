import React from "react";
import Popup from "reactjs-popup";
import { FaAddressCard } from "react-icons/fa";
import { IoIosBriefcase, IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";

import { SideBar } from "../../components/Sidebar/SideBar.component";

export default class NewContactPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <SideBar onClick={this.openModal} />
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
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
    );
  }
}
