import classes from "./CartItem.module.css";
import styled from "styled-components";
import { cartActions } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, price, title, desc, image, quantity }) => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(
      cartActions.addToCart({
        id,
        title,
        price,
        desccription: desc,
        image,
      })
    );
  };
  const decrement = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const removeItem = () => {
    dispatch(cartActions.clearItem(id));
  };
  return (
    <List>
      <hr />
      <div className="row mb-3 p-3">
        <div className={`col-md-6 d-flex ${classes["image-container"]}`}>
          <picture>
            <img src={image} alt="cart-item" className="Image-fluid" />
          </picture>

          <div className={classes.actions}>
            <button onClick={increment}>+</button>
            <span className="d-flex align-items-center justify-content-center">
              {quantity}
            </span>
            <button onClick={decrement}>-</button>
          </div>
        </div>
        <div
          className={`col-md-6 d-flex flex-column justify-content-center pt-4 ${classes.details}`}
        >
          <h3>{title}</h3>
          <p>${price}</p>
          <em>{desc}</em>
          <p className={`text-danger ${classes.action}`} onClick={removeItem}>
            Remove
          </p>
        </div>
      </div>
    </List>
  );
};

export default CartItem;

const List = styled.li`
  list-style-type: none;
`;
