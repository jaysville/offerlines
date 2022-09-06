import Products from "../../components/products/Products";
import CategoryLinks from "../../components/UI/Category/CategoryLinks";

const Shop = (props) => {
  return (
    <>
      <CategoryLinks categories={props.categories} />
      <Products products={props.products} />
    </>
  );
};

export default Shop;

export const getStaticProps = async () => {
  const axios = require("axios");
  const { categoryData } = require("../../categoryData");

  const res = await axios.get("https://dummyjson.com/products");
  const results = res.data;
  const fetchedProducts = results.products;

  return {
    props: {
      products: fetchedProducts,
      categories: categoryData,
    },
    revalidate: 1,
  };
};
