import React, { Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {
  renderProduct = () => {
    const { onDelete, onChange, onIncrement, onDecrement, products } =
      this.props;
    if (this.props.products.length === 0)
      return <h1>there is no product in cart </h1>;

    return this.props.products.map((product, index) => {
      return (
        <Product
          className="box"
          product={product}
          key={index}
          onDelete={() => onDelete(product.id)}
          onIncrement={() => onIncrement(product.id)}
          onDecrement={() => onDecrement(product.id)}
          onChnage={(e) => onChange(e, product.id)}
        />
      );
    });
  };
  render() {
    const { products } = this.props;
    return (
      <div>
        {!products.length && <h1>GO to shopping</h1>}
        {this.renderProduct()}
      </div>
    );
  }
}

export default ProductList;
