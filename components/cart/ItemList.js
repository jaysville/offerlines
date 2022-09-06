import CartItem from "./CartItem";
import styled from "styled-components";

const ItemList = (props) => {
  const cartItems = props.cartItems;

  return (
    <ListContainer>
      {cartItems.map(({ id, title, description, image, price, quantity }) => {
        return (
          <CartItem
            key={id}
            id={id}
            title={title}
            desc={description}
            image={image}
            price={price}
            quantity={quantity}
          />
        );
      })}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  padding-inline-start: 0;
`;
export default ItemList;
