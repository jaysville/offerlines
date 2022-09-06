import Landing from "../components/layout/Landing/Landing";
import Perks from "../components/UI/Perks/Perks";
import Products from "../components/products/Products";

const HomePage = (props) => {
  const { products } = props;

  return (
    <>
      <Landing />
      <section className="container">
        <Perks />
        <h3 className="text-center">Featured Products</h3>
        <Products products={products} />
      </section>
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const axios = require("axios");
  const res = await axios.get("https://dummyjson.com/products?limit=10");
  const results = res.data;
  const fetchedProducts = results.products;

  return {
    props: {
      products: fetchedProducts,
    },
    revalidate: 1,
  };
};
