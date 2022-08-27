import React, { useState } from "react";
import Wrapper from "./Components/HOC/Wrapper";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/List/ProductList";
import CounterReducer from "./Components/Reducer/CounterReducer";
import CounterProvider from "../OLDFILE/Context/CounterProvider";
import MulltipleReducer from "./Components/Reducer/MulltipleReducer";

const App = () => {
  const [products, setProduct] = useState([
    { title: "Node", price: "17$", id: 1, quantity: 6 },
    { title: "React", price: "17$", id: 2, quantity: 2 },
    { title: "HTML", price: "17$", id: 3, quantity: 3 },
  ]);
  //TODO :  Delete the product
  const removeHandler = (id) => {
    const filtredProduct = products.filter((p) => p.id !== id);
    setProduct(filtredProduct);
  };
  //TODO : Add to the product
  const incrementHandlers = (id) => {
    // Code with no muted
    const index = products.findIndex((item) => item.id === id);
    // console.log(index);
    // 3. clone the selected index and update the qty:
    const product = { ...products[index] };
    product.quantity++;
    // 4. update the product;
    const updatedProduct = [...products];
    updatedProduct[index] = product;
    setProduct(updatedProduct);
  };
  const DecrementHandlers = (id) => {
    // Code with no muted
    const index = products.findIndex((item) => item.id === id);
    // console.log(index);
    // 3. clone the selected index and update the qty:
    const product = { ...products[index] };
    //  product.quantity++;
    if (product.quantity === 1) {
      const filtredProduct = products.filter((p) => p.id === id);
      setProduct(filtredProduct);
    } else {
      // 4. update the product;
      const updatedProduct = [...products];

      updatedProduct[index] = product;
      product.quantity--;
      setProduct(updatedProduct);
    }
    // 4. update the product;
    // const updatedProduct = [...products];
    // updatedProduct[index] = product;
    // setProduct(updatedProduct);
  };
  const inputHandler = (e, id) => {
    const updatedProduct = [...products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.title = e.target.value;
    setProduct(updatedProduct);
  };
  return (
    <>
      <Navbar totalItem={products.filter((p) => p.quantity > 0).length} />
      <ProductList
        products={products}
        onDelete={removeHandler}
        onIncrement={incrementHandlers}
        onDecrement={DecrementHandlers}
        onChange={inputHandler}
      />
    </>
  );
};

export default App;
