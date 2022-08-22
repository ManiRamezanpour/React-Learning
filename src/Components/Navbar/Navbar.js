import styles from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <header className={styles.navBar}>
      <h1>Shopping App</h1>
      <span>{props.totalItem}</span>
    </header>
  );
};

export default Navbar;
