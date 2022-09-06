import Products from "../../../components/products/Products";
import { useRouter } from "next/router";
import CategoryLinks from "../../../components/UI/Category/CategoryLinks";
import styled from "styled-components";

const Category = ({ products, categories }) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <section>
      <CategoryLinks categories={categories} />
      <CategoryTextStyle>{category.toUpperCase()}</CategoryTextStyle>
      <Products products={products} />
    </section>
  );
};

export default Category;

export const getStaticPaths = async () => {
  const { categoryData } = require("../../../categoryData");

  return {
    paths: categoryData.map((path) => ({
      params: { category: path },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { categoryData } = require("../../../categoryData");
  const { category } = context.params;
  const axios = require("axios");
  const products = await axios.get(
    `https://dummyjson.com/products/category/${category}`
  );
  const fetchedProducts = products.data.products;

  return {
    props: {
      products: fetchedProducts,
      categories: categoryData,
    },
  };
};

const CategoryTextStyle = styled.h3`
  color: rgb(184, 111, 16);
  text-align: center;
  margin: 20px auto;
`;
