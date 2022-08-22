import React, { Component } from "react";
import ProductList from "./Components/List/ProductList";
import styles from "./app.module.css";
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
  state = {
    products: [
      { title: "Node", price: "17$", id: 1, quantity: 6 },
      { title: "React", price: "17$", id: 2, quantity: 2 },
      { title: "HTML", price: "17$", id: 3, quantity: 3 },
    ],
  };
  removeHandler = (id) => {
    console.log("clicked", id);
    const filtredProduct = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filtredProduct });
  };
  incrementHandlers = (id) => {
    // this.state.products;
    const products = [...this.state.products];
    console.log(products);
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.quantity++; // State Mutate
    this.setState({ products: products });
  };
  DecrementHandlers = (id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    if (selectedItem.quantity === 1) {
      const filtredProduct = products.filter((p) => p.id !== id);
      this.setState({ products: filtredProduct });
    } else {
      selectedItem.quantity--; // State Mutate
      this.setState({ products: products });
    }
  };
  inputHandler = (e, id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.title = e.target.value;
    this.setState({ products: products });
  };
  render() {
    return (
      <div className={styles.container}>
        <Navbar totalItem={this.state.products.filter((p) => p.quantity > 0).length} />
        <ProductList
          products={this.state.products}
          onDelete={this.removeHandler}
          onIncrement={this.incrementHandlers}
          onDecrement={this.DecrementHandlers}
          onChange={this.incrementHandlers}
        />
      </div>
    );
  }
}

export default App;
