import React, { Component } from "react";
import UserList from "../containers/user-list";
import Userdetails from "../containers/Userdetails";
const App1 = () => (
  <div>
    <h2>Username List:</h2>
    <UserList />
    <hr />
    <h2>User Details:</h2>
    <Userdetails />
  </div>
);

export default App1;
