//render list of counters

//zen coding: imrc TAB key
import React, { Component } from "react";

//import counter component
import Counter from "./counter";

//zen coding: cc TAB key
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 11 },
      { id: 2, value: 22 },
      { id: 3, value: 33 },
      { id: 4, value: 44 }
    ]
  };

  handleIncrement=counter=>{
    console.log(counter);
    const counters=[...this.state.counters];
  }

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
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          /*create new counters with initial values*/
          <Counter
            key={counter.id}
            /*what method to call when the ondelete event is activated*/
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          >
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
