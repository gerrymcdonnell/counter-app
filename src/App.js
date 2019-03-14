import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
//import component
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ]
  };

  handleIncrement = counter => {
    console.log("handleincrement called:", counter);

    //spread operator to clone array of counters in state object
    const counters = [...this.state.counters];

    //get the index of the counter that is passed
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters: counters });
  };

  handleDelete = counterId => {
    console.log("event handle delete called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  //handle reset button click
  handleReset = () => {
    console.log("handleReset called");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  render() {
    return (
      /* if returning multiple root elements from root method must wrap in a react fragment*/
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
