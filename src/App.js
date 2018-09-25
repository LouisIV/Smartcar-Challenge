import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ExplorerComponent from "./components/ExplorerComponent";
const MISSING_NAME = "MISSING_NAME";
const MISSING_TITLE = "MISSING_TITLE";
const MISSING_URL = "MISSING_URL";
const MISSING_METHOD = "MISSING_METHOD";
const MISSING_BODY = "MISSING_BODY";

const config = {
  title: "Add new user",
  url: "https://jsonplaceholder.typicode.com/users",
  method: "POST",
  body: [
    {
      name: "email",
      type: "email",
      max: 24,
      min: 3
    },
    {
      name: "full-name",
      type: "text",
      placeholder: "John Doe",
      required: true
    },
    {
      name: "phone",
      type: "tel",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"
    }
  ]
};

class App extends Component {
  // readConfig() {
  //   let { title, url, method, body } = this.state;
  //   title = config.title || MISSING_TITLE;
  //   url = config.title || MISSING_URL;
  //   method = config.method || MISSING_METHOD;
  //   body = config.body || MISSING_BODY;
  //   this.setState({ title, url, method, body });
  // }
  render() {
    const { title, url, method, body } = config;
    if (!title || !url || !method || !body) {
      this.readConfig();
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ExplorerComponent
          title={title}
          url={url}
          method={method}
          body={body}
        />
      </div>
    );
  }
}

export default App;
