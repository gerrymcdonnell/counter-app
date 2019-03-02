// .jsx is jjust for better code completion

// video 24
// counter module
// import react and component class from react module

// note there are shortcuts to the below code with the extension 'simple react snippets'

// type imrc and tab for the below
import React, { Component } from "react";

// type cc for this shortcut
class Counter extends Component {
  //state object that contaisn data the component needs
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };
  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
