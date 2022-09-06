import { ImageThumbnail } from "../UI/ProductImages";
import { useState } from "react";
import { useRouter } from "next/router";
import classes from "./ProductDetails.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";

import TaskAltOutlined from "@mui/icons-material/TaskAltOutlined";
import KeyboardBackspaceOutlined from "@mui/icons-material/KeyboardBackspaceOutlined";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import Modal from "../UI/Modal/Modal";

const ProductDetails = (props) => {
  const { id, title, description, price, images, brand } = props.product;
  const router = useRouter();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        title,
        price,
        description,
        image: images[0],
      })
    );
    setModalIsOpen(true);
  };

  return (
    <>
      {modalIsOpen && (
        <Modal>
          <div className={classes["modal-content"]}>
            <span
              className={classes.shopBtn}
              onClick={() => {
                router.push("/shop");
              }}
            >
              <KeyboardBackspaceOutlined />
              Continue Shopping
            </span>
            <button className={classes.closeBtn} onClick={closeModal}>
              <CloseOutlined />
            </button>
            <h3 className="mt-5">Item Added To Cart</h3>
            <div>
              <TaskAltOutlined className={classes.check} />
            </div>
            <button
              className={classes["cart-link"]}
              onClick={() => {
                router.push("/cart");
              }}
            >
              Go to cart
            </button>
          </div>
        </Modal>
      )}
      <div className={`row mt-5 py-5 px-2 ${classes.container}`}>
        <div
          className={`col-md-6 dflex px-3 justify-content-center ${classes["image-container"]}`}
        >
          <ImageThumbnail src={images[0]} />
          <ImageThumbnail src={images[1] || images[0]} />
          <ImageThumbnail src={images[2] || images[0]} />
          <ImageThumbnail src={images[3] || images[0]} />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center py-3">
          <h3>{title}</h3>
          <h4 className="text-muted">${price}</h4>
          <strong>
            <i>{brand}</i>
          </strong>

          <p>
            <em>{description}</em>
          </p>
          <button className={classes.actions} onClick={addToCartHandler}>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
