//render list of counters

//zen coding: imrc TAB key
import React, { Component } from "react";

//import counter component
import Counter from "./counter";

//zen coding: cc TAB key
class Counters extends Component {


  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m2"
        >
          Reset
        </button>
        {counters.map(counter => (
          /*create new counters with initial values*/
          <Counter
            key={counter.id}
            /*what method to call when the ondelete event is activated*/
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
