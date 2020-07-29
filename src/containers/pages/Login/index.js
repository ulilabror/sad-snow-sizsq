import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    return (
      <div>
        <p> Login page </p>
        <button>Go to Register page</button>
        <button>Go to Dashboard Page</button>
      </div>
    );
  }
}
const reduxState = state => {
  return {
    popupProps: state.popup
  };
};

export default connect(
  reduxState,
  null
)(Login);
