import React from "react";
import styles from "./Product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = ({onChnage,onDecrement,onIncrement,onDelete,product}) => {
  console.log("Product.js render");
  return (
    <div className={styles.Product}>
      <h2>Product Name : {product.title}</h2>
      <h2>Price is : {product.price}</h2>
      <span className={styles.value}>{product.quantity}</span>
      <input
        type="text"
        onChange={onChnage}
        className={styles.input}
        value={product.title}
      />
      <button
        className={`${styles.button} ${styles.incbtn}`}
        onClick={onIncrement}
      >
        +
      </button>
      <button
        className={`${styles.button} ${
        product.quantity === 1 ? styles.remove : null
        }`}
        onClick={onDecrement}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button
        onClick={onDelete}
        className={`${styles.button} ${styles.remove}`}
      >
        remove
      </button>
    </div>
  );
};

export default Product;
