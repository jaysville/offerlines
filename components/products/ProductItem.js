import classes from "./ProductItem.module.css";
import Link from "next/link";

const ProductItem = ({ product }) => {
  const { title, price, images, id } = product;

  return (
    <Link href={`/products/${id}`}>
      <div className={classes["product-item"]}>
        <div className={classes["img-container"]}>
          <picture>
            <img src={images[0]} className={`img-fluid`} alt="product" />
          </picture>
        </div>
        <div className="text-center px-2 mt-3">
          <strong>{title}</strong>
          <p>${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
