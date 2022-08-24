import React from 'react'
const MemoComp = (props) => {
  console.log("Memo Comp Rendered");
  return <div>MemoComp - {props.name}</div>;
};

export default React.memo(MemoComp);
