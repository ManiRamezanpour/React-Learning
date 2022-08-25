import React, { Component } from "react";
import Wrapper from "./Components/HOC/Wrapper";
import CounterProvider from "./Context/CounterProvider";
import CounterOne from "./Context/CountOne";
class App extends Component {
  state = {
    products: [
      { title: "Node", price: "17$", id: 1, quantity: 6 },
      { title: "React", price: "17$", id: 2, quantity: 2 },
      { title: "HTML", price: "17$", id: 3, quantity: 3 },
    ],
    isShow: true,
  };
  removeHandler = (id) => {
    const filtredProduct = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filtredProduct });
  };
  incrementHandlers = (id) => {
    // Code with no muted
    const index = this.state.products.findIndex((item) => item.id === id);
    // console.log(index);
    // 3. clone the selected index and update the qty:
    const product = { ...this.state.products[index] };
    product.quantity++;

    // 4. update the product;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };
  DecrementHandlers = (id) => {
    // Code with no muted
    const index = this.state.products.findIndex((item) => item.id === id);
    // console.log(index);
    // 3. clone the selected index and update the qty:
    const product = { ...this.state.products[index] };
    //  product.quantity++;
    if (product.quantity === 1) {
      const filtredProduct = this.state.products.filter((p) => p.id === id);
      this.setState({ products: filtredProduct });
    } else {
      // 4. update the product;
      const products = [...this.state.products];

      products[index] = product;
      product.quantity--;
      this.setState({ products });
    }

    // 4. update the product;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };
  inputHandler = (e, id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.title = e.target.value;
    this.setState({ products: products });
  };
  //* finishd the run and ouput in DOM
  componentDidMount() {
    // console.log("App.js componentDidMount");
    // AJAX =>
    //this.setState({ products })
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("app.js cdu");
  }
  render() {
    //? log after render method run
    // console.log("App.js render");
    return (
      <>
        <CounterProvider>
          <h1>wellCome to Context</h1>
          <CounterOne />
        </CounterProvider>
        {/* <Navbar
          totalItem={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList
          products={this.state.products}
          onDelete={this.removeHandler}
          onIncrement={this.incrementHandlers}
          onDecrement={this.DecrementHandlers}
          onChange={this.inputHandler}
        /> */}
      </>
    );
  }
}
export default Wrapper(App, "container");
