import React, { PureComponent } from "react";
class RegComp extends PureComponent {
  render() {
    console.log("Pure Component");
    return <div>pure Comp - {this.props.name}</div>;
  }
}

export default RegComp;
