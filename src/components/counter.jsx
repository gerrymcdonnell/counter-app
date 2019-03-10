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
    value: this.props.value,
    caption: this.props.caption,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  /*constructor(){
    super();
    this.handleIncrement=this.handleIncrement.bind(this);
    //console.log("constructor called");
  }*/

  //conditional rendering for elements of the tags array
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {" "}
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //event paramater product
  handleIncrement = product => {
    console.log(product);

    console.log("increment clicked: count=", this.state.value);

    /*cant do this with react
    this.state.count++;
    see vid 33*/
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    //display the props of this component
    console.log("props", this.props);

    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/*delete button*/}
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          delete
        </button>

        {this.state.tags.length === 0 && "Please create a new tag"}
        {/*this.renderTags()*/}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
