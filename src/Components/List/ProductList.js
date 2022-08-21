import React, { Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {
  state = {
    products: [
      { title: "NodeJs", price: "17$", id: 1 },
      { title: "NodeJs", price: "17$", id: 2 },
      { title: "NodeJs", price: "17$", id: 3 },
    ],
  };
  render() {
    return (
      <div>
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
}

export default ProductList;
