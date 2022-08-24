import React, { Component, createRef } from "react";

class ClassRef extends Component {
  state = {};
  //TODO: Create Ref
  constructor(props) {
    super(props);
    this.inpurRef = createRef();
  }

  componentDidMount() {
    this.inpurRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inpurRef} />
      </div>
    );
  }
}
export default ClassRef;
