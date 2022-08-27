import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/List/ProductList";
import ProductProvider from "./Components/Provider/ProductProvider";
import Wrapper from "./Components/Wrapper/Wrapper";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <ProductProvider>
        <Navbar />
        <ProductList />
      </ProductProvider>
    </div>
  );
};

export default Wrapper(App, "container");
