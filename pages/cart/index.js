import ItemList from "../../components/cart/ItemList";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";
import LaunchOutlined from "@mui/icons-material/LaunchOutlined";
import { useRouter } from "next/router";

import styled from "styled-components";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  let content;

  const totalPriceArray = cartItems.map((item) => item.totalPrice);

  const totalPrice = totalPriceArray.reduce((first, last) => {
    return first + last;
  }, 0);

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  if (cartItems.length === 0) {
    content = (
      <EmptyCartContainer>
        <h4>Your Cart Is Empty :( !</h4>
        <p
          onClick={() => {
            router.push("/shop");
          }}
        >
          Go Shopping <LaunchOutlined />
        </p>
      </EmptyCartContainer>
    );
  } else {
    content = (
      <div className="d-flex flex-column ">
        <ItemList cartItems={cartItems} />
        <hr />
        <div className="d-flex justify-content-between mb-5">
          <ClearBtn onClick={clearCartHandler}>Clear Cart</ClearBtn>
          <div>
            <h2>Total: ${totalPrice.toLocaleString()}</h2>
            <CheckoutBtn>CheckOut</CheckoutBtn>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="container mt-5">
      <PageHeader>Your Cart</PageHeader>
      {content}
    </section>
  );
};
export default Cart;

const ClearBtn = styled.div`
  color: red;
  cursor: pointer;
  display: grid;
  font-size: 20px;
  place-items: center;
  &:hover {
    color: orange;
  }
`;

const CheckoutBtn = styled.button`
  background-color: black;
  color: aliceblue;
  width: 100%;
  height: 50px;
`;

const PageHeader = styled.h2`
  margin-bottom: 50px;
`;

const EmptyCartContainer = styled.div`
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ;
  svg {
    font-size: 20px;
  }
  p {
    cursor: pointer;
    &:hover {
      color: goldenrod;
    }
  }
`;
