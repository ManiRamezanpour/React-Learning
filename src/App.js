import React, { Component } from "react";
import Product from "./Components/Product";
import "./app.css";
class App extends Component {
  state = {
    products: [
      { title: "NodeJs", price: "17$", id: 1 },
      { title: "NodeJs", price: "17$", id: 2 },
      { title: "NodeJs", price: "17$", id: 3 },
    ],
  };
  render() {
    return (
      <div className="container" id="title">
        <h1>Shopping App</h1>
        {this.state.products.map((product) => {
          return (
            <Product
              className="box"
              name={product.title}
              price={product.price}
              key={product.id}
            />
          );
        })}
      </div>
    );
  }
  // * 1. just change or update the state with "setState";
  //! { some props : 
  // ? 1. Atributte
  // ? 2. state
  // ? 3. pass fragment as a props
  //! }
}

export default App;
