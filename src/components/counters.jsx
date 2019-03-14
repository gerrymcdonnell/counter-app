//render list of counters

//zen coding: imrc TAB key
import React, { Component } from "react";

//import counter component
import Counter from "./counter";

//zen coding: cc TAB key
class Counters extends Component {
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
          />
        ))}
      </div>
    );
  }
}

export default Counters;
