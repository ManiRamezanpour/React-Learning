import React, { useContext, useReducer, useState } from "react";

const productsContext = React.createContext();
const productsContextDispatcher = React.createContext();

const initialState = [
  { title: "Node", price: "17$", id: 1, quantity: 6 },
  { title: "React", price: "17$", id: 2, quantity: 2 },
  { title: "HTML", price: "17$", id: 3, quantity: 3 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProduct = [...state];
      updatedProduct[index] = product;
      return updatedProduct;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filtredProduct = state.filter((p) => p.id === action.id);
        return filtredProduct;
      } else {
        const updatedProduct = [...state];

        updatedProduct[index] = product;
        product.quantity--;
        return updatedProduct;
      }
    }
    case "remove": {
      const filtredProduct = state.filter((p) => p.id !== action.id);
      return filtredProduct;
    }
    case "edite": {
      const updatedProduct = [...state];
      const selectedItem = state.find((p) => p.id === action.id);
      selectedItem.title = action.event.target.value;
      return updatedProduct;
    }
    default:
      return state;
  }
};
const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);
  return (
    <productsContext.Provider value={products}>
      <productsContextDispatcher.Provider value={dispatch}>
        {children}
      </productsContextDispatcher.Provider>
    </productsContext.Provider>
  );
};
export default ProductProvider;

export const useProduct = () => useContext(productsContext);

export const useProductAction = () =>  useContext(productsContextDispatcher);

  // const removeHandler = (id) => {
  //   const filtredProduct = products.filter((p) => p.id !== id);
  //   setProduct(filtredProduct);
  // };

  // const incrementHandlers = (id) => {
  //   const index = products.findIndex((item) => item.id === id);
  //   const product = { ...products[index] };
  //   product.quantity++;
  //   const updatedProduct = [...products];
  //   updatedProduct[index] = product;
  //   setProduct(updatedProduct);
  // };

  // const DecrementHandlers = (id) => {
  //   const index = products.findIndex((item) => item.id === id);
  //   const product = { ...products[index] };
  //   if (product.quantity === 1) {
  //     const filtredProduct = products.filter((p) => p.id === id);
  //     setProduct(filtredProduct);
  //   } else {
  //     const updatedProduct = [...products];

  //     updatedProduct[index] = product;
  //     product.quantity--;
  //     setProduct(updatedProduct);
  //   }
  // };

  // const inputHandler = (e, id) => {
  //   const updatedProduct = [...products];
  //   const selectedItem = products.find((p) => p.id === id);
  //   selectedItem.title = e.target.value;
  //   setProduct(updatedProduct);
  // };

  // return { removeHandler, incrementHandlers, DecrementHandlers, inputHandler }};
