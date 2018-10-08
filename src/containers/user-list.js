import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../actions/index";
class UserList extends Component {
  createListItems() {
    return this.props.user.map(vari => {
      return (
        <li key={vari.id} onClick={() => this.props.selectUser(vari)}>
          {vari.first}
          {vari.age}
        </li>
      );
    });
  }
  render() {
    return <ul>{this.createListItems()}</ul>;
  }
}

function mapstoprops(state) {
  return {
    user: state.students
  };
}
function mapdispatch(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}
export default connect(
  mapstoprops,
  mapdispatch
)(UserList);
