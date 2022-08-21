import React, { Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {
  state = {
    products: [
      { title: "NodeJs", price: "17$", id: 1, quantity: 1 },
      { title: "React Js", price: "17$", id: 2, quantity: 2 },
      { title: "JavaScript", price: "17$", id: 3, quantity: 3 },
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
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.quantity++; // State Mutate
    this.setState({ products: products });
  };
  DecrementHandlers = (id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    if (selectedItem.quantity === 1) {
      const filtredProduct = products.filter((p) => p.id !== id);
      this.setState({products:filtredProduct})
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
      <div>
        {this.state.products.map((product, index) => {
          return (
            <Product
              className="box"
              name={product.title}
              price={product.price}
              quantity={product.quantity}
              key={index}
              onDelete={() => this.removeHandler(product.id)}
              onIncrement={() => this.incrementHandlers(product.id)}
              onDecrement={() => this.DecrementHandlers(product.id)}
              onChnage={(e) => this.inputHandler(e, product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
