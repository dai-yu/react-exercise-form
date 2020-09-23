import React, { Component } from "react";
import "./myProfile.less";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "Male",
      text: "",
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <span>Name</span>
        <br />
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <span>Gender</span>
        <br />
        <select
          name="gender"
          value={this.state.gender}
          onChange={this.handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <span>Description</span>
        <br />
        <textarea
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="check"
          type="checkbox"
          name="checked"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <span>I have read the terms of conduct</span>
        <br />
        <input
          className="button"
          type="submit"
          value="Submit"
          disabled={
            this.state.name === "" ||
            this.state.text === "" ||
            this.state.checked === false
          }
        />
      </form>
    );
  }
}

export default MyProfile;
