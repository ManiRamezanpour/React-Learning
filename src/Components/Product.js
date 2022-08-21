import styles from './Product.module.css'
const Product = (props) => {
    return (
        <div className={styles.Product}>
            <h1>Product Name : {props.name}</h1>
            <h2>Price is : {props.price}</h2>
        </div>
    );
}
 
export default Product;