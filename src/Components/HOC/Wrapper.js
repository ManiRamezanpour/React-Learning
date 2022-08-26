//TODO :  hoc => function  !
//* : input : component ... > output : new component !
//? why ? to share the logic (functionality)  between the components

// const Wrapper = (props) => {
//   return <div className={props.class}>{props.children}</div>;
// };

const Wrapper = (WrapperComponent, className) => {
  return (props) => {
    return (
      <div className={className}>
        <WrapperComponent {...props} />
      </div>  
    );
  };  
};

export default Wrapper;
