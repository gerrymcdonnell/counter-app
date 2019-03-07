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
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };


  /*constructor(){
    super();
    this.handleIncrement=this.handleIncrement.bind(this);
    //console.log("constructor called");
  }*/


  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  //conditional rendering for elements of the tags array
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return <ul> {this.state.tags.map(tag => (<li key={tag}>{tag}</li>))}</ul>
  }


  //naming convention is handleWhat
  handleIncrement = () => {
    console.log('increment clicked', this.state.count);

    //cant do this with react
    //this.state.count++;

    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>


        {this.state.tags.length === 0 && 'Please create a new tag'}
        {this.renderTags()}


      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

}

export default Counter;
