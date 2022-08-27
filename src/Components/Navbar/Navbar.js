import { useProduct } from "../Provider/ProductProvider";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const products = useProduct();
  const totalItems = products.filter((p) => p.quantity > 0).length;
  return (
    <header className={styles.navBar}>
      <h1>Shopping App</h1>
      <span>{totalItems}</span>
    </header>
  );
};

export default Navbar;
