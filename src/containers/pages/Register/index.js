import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <p> Register page </p>
          <input placeholder="Email" type="text" />
          <input placeholder="Password" type="password" />
          <button>Register</button>
        </div>
        <button>Go to Dashboard</button>
      </div>
    );
  }
}

export default Register;
