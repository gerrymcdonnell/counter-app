// .jsx is jjust for better code completion

// video 24
// counter module
// import react and component class from react module

// note there are shortcuts to the below code with the extension 'simple react snippets'

// type imrc and tab for the below
import React, { Component } from "react";

// type cc for this shortcut
class Counter extends Component {
  //state object that contains data the component needs
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  styles={
    fontSize:10,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        
        <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
