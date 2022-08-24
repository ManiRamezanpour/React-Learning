import React, { Component } from "react";
class Classcounter extends Component {
  state = {
    name: "",
    count: 0,
  };
  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    // based on count changes
    if (prevState.count !== this.state.count) {
      console.log("document title update");
      document.title = `clicked ${this.state.count} times`;
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count: {this.state.count}
        </button>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
      </div>
    );
  }
}

export default Classcounter;
