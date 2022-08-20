import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  addOneHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={this.addOneHandler}>add One</button>
        <button onClick={this.addTwoHandler}>add Two</button>
        <button onClick={this.addFiveHandler}>add Five</button>
      </div>
    );
  }
}

export default Counter;
