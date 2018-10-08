import React, { Component } from "react";
import { connect } from "react-redux";

class Userdetails extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>{this.props.user.first}</h2>
        <h3>{this.props.user.age}</h3>
        <h4>{this.props.user.description}</h4>
      </div>
    );
  }
}

function mapstoprops(state) {
  return {
    user: state.activeuser
  };
}
export default connect(mapstoprops)(Userdetails);
