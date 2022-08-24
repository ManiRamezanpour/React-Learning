import React from 'react'
const MemoComp = (props) => {
  console.log("Memo Comp Rendered");
  return <div>MemoComp - {props.name}</div>;
};

export default React.memo(MemoComp);
//TODO :  React.memo when not change the state Not reRender.
//? : React.memo = PureComponents in Sfc.
