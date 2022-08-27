import Product from "../Product/Product";
import { useProduct, useProductAction } from "../Provider/ProductProvider";
const ProductList = (props) => {
  const products = useProduct();
  const dispatch = useProductAction();

  const renderProduct = () => {
    if (products.length === 0) return <h1>there is no product in cart </h1>;

    return products.map((product, index) => {
      return (
        <Product
          className="box"
          product={product}
          key={index}
          onDelete={() => dispatch({ type: "remove", id: product.id })}
          onIncrement={() => dispatch({ type: "increment", id: product.id })}
          onChnage={(e) =>
            dispatch({ type: "edite", id: product.id, event: e })
          }
          onDecrement={() => dispatch({ type: "decrement", id: product.id })}
        />
      );
    });
  };

  return (
    <div>
      {!products.length && <h1>GO to shopping</h1>}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
