import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
//import component
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      /* if returning multiple root elements from root method must wrap in a react fragment*/
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
