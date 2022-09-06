import CartItem from "./CartItem";

const ItemList = (props) => {
  const cartItems = props.cartItems;

  return (
    <ul>
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
    </ul>
  );
};

export default ItemList;
