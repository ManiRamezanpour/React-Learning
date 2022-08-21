import React, { Component } from "react";
import Product from "./Components/Product/Product";
import ProductList from "./Components/List/ProductList";
import styles from "./app.module.css"
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <ProductList/>
      </>
    );
  }
  // * 1. just change or update the state with "setState";
  /*! { some props : 
  // ? 1. Atributte
  // ? 2. state
  // ? 3. pass fragment as a props
  ! } */
}

export default App;
