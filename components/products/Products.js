import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const Products = ({ products }) => {
  return (
    <section className={`container ${classes.products}`}>
      {products.map((product, i) => {
        return <ProductItem product={product} key={i} />;
      })}
    </section>
  );
};
export default Products;
