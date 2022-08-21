import React, { Component } from "react";
import Product from "./Components/Product/Product";
import ProductList from "./Components/List/ProductList";
import styles from "./app.module.css"

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className={styles.container}>
        <ProductList/>
      </div>
    );
  }
}
 
export default App;
