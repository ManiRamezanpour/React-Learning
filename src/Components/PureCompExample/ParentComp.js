import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
class ParentComponent extends Component {
  //TODO: when pureComponent for render state not change
  //? dont render the parent
  state = {
    name: "Mani", 
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Mani" });
    }, 100);
  }
  render() {
    console.log("Parent Comp ----------");
    return (
      <div>
        ParentComponent
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
