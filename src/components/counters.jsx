//render list of counters

//zen coding: imrc TAB key
import React, { Component } from "react";

//import counter component
import Counter from "./counter";

//zen coding: cc TAB key
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1, caption: "increment1" },
      { id: 2, value: 2, caption: "increment2" },
      { id: 3, value: 3, caption: "increment3" },
      { id: 4, value: 4, caption: "increment4" }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          /*create new counters with initial values*/
          <Counter
            key={counter.id}
            value={counter.value}
            caption={counter.caption}
          >
            <h4>Title</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
