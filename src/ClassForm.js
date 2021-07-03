import React, { Component } from "react";

class classForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
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
            onChange={this.handleChange}
            value={this.state.name}
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
            onChange={this.handleChange}
            value={this.state.email}
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
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <br />
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
export default classForm;
