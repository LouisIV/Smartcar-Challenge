import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { mainConfig, example2, example1 } from "./configs";

import ExplorerComponent from "./components/ExplorerComponent";
class App extends Component {
  render() {
    const { title, url, method, body } = mainConfig;
    return (
      <div className="App">
        <h2 className={"title"}>{title}</h2>
        <ExplorerComponent url={url} method={method} body={body} />
      </div>
    );
  }
}

export default App;
