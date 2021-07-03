import React, { Component } from "react";

class classForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState = ({ username: "", email: "", password: "", })
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}> 
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            name= "username"
            value={this.state.username}
            onChange = {this.handleChange}
          />
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name= "email"
            value={this.state.email}
            onChange = {this.handleChange}
          />
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name= "password"
            value={this.state.password}
            onChange = {this.handleChange}
          />
        </div>
        <br />
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" onSubmit = {this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}
export default classForm;
