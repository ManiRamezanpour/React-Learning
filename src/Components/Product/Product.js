import React from "react";
import styles from "./Product.module.css";
const Product = (props) => {
  return (
    <div className={styles.Product}>
      <h1>Product Name : {props.name}</h1>
      <h2>Price is : {props.price}</h2>
      <span className={styles.value}>{props.quantity}</span>
      <input
        type="text"
        onChange={props.onChnage}
        className={styles.input}
        value={props.name}
      />
      <button
        className={`${styles.button} ${styles.incbtn}`}
        onClick={props.onIncrement}
      >
        increment
      </button>
      <button
        className={`${styles.button} ${styles.incbtn}`}
        onClick={props.onDecrement}
      >
        decrement
      </button>
      <button onClick={props.onDelete} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Product;
