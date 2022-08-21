import React, { Fragment } from "react";
import styles from "./Product.module.css";
const Product = (props) => {
  return (
    // jsx have error dont use parent div.
    // but can use <> or React fragmaent.
    //! Use Parent div
    <div className={styles.Product}>
      <h1>Product Name : {props.name}</h1>
      <h2>Price is : {props.price}</h2>
    </div>
    // ! Use <></>
    // <>
    //   <h1>Product Name : {props.name }</h1>
    //   <h2>Price is : {props.price}</h2>
    // </>
    // ! Fragment
    // <Fragment>
    //   <h1>Product Name : {props.name}</h1>
    //   <h2>Price is : {props.price}</h2>
    // </Fragment>
  );
};

export default Product;
