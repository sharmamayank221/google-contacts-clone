import React from "react";
import FormInput from "../components/FormInput/FormInput.component";
import { FaAddressCard } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import "./CreateContactForm.styles.css";
import CustomButton from "../components/Custom-button/CustomButton.component";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      mobile: "",
      phone: "",
      email: "",
      group: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: "",
      mobile: "",
      phone: "",
      group: "",
      firstname: "",
      lastname: ""
    });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="header-form">
          <div className="header-title">Create new contact</div>
        </div>
        <div className="names">
          <FaAddressCard
            style={{
              width: 40,
              height: 25,
              color: "grey",
              background: "transparent"
            }}
          />
          <div className="name">
            <FormInput
              type="text"
              name="firstname"
              className="input"
              value={this.state.firstname}
              handleChange={this.handleChange}
              label="First name"
            />
          </div>
          <div className="last-name">
            <FormInput
              type="text"
              name="lastname"
              className="input"
              handleChange={this.handleChange}
              value={this.state.lastname}
              label="Last name"
            />
          </div>
        </div>
        <div className="comp-job">
          <MdCall style={{ width: 40, height: 30, color: "grey" }} />
          <div className="company">
            <FormInput
              type="number"
              name="mobile"
              className="input"
              handleChange={this.handleChange}
              value={this.state.mobile}
              label="Mobile"
            />
          </div>
          <div className="title">
            <FormInput
              type="number"
              name="phone"
              className="input"
              handleChange={this.handleChange}
              value={this.state.phone}
              label="Phone "
            />
          </div>
        </div>
        <div className="email">
          <IoIosMail
            style={{
              width: 40,
              height: 30,
              color: "grey",
              background: "transparent"
            }}
          />
          <div>
            <FormInput
              type="email"
              name="email"
              className="email-input"
              handleChange={this.handleChange}
              value={this.state.email}
              label="Email"
            />
          </div>
        </div>
        <div className="phone">
          <TiUserAdd
            style={{
              width: 40,
              height: 30,
              color: "grey",
              background: "transparent"
            }}
          />
          <div className="input-label">
            <FormInput
              type="text"
              name="group"
              className="phone-input"
              handleChange={this.handleChange}
              value={this.state.group}
              label="Group"
            />
          </div>
        </div>
        <div className="bottom">
          <CustomButton
            style={{ marginRight: "25px" }}
            onClick={this.props.cancle}
          >
            cancel
          </CustomButton>
          <CustomButton type="submit">save</CustomButton>
        </div>
      </form>
    );
  }
}

export default ContactForm;
