import ProductDetails from "../../components/products/ProductDetails";

const SingleProduct = (props) => {
  return (
    <div className="container p-3">
      <ProductDetails product={props.product} />
    </div>
  );
};
export default SingleProduct;

export const getStaticPaths = () => {
  const PATHS = [];
  for (let i = 1; i < 101; i++) {
    PATHS.push(i);
  }
  return {
    paths: PATHS.map((path) => ({ params: { id: path.toString() } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const axios = require("axios");
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  const fetchedProduct = res.data;

  return {
    props: {
      product: fetchedProduct,
    },
  };
};
