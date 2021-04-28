import React from "react";
import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
} from "./cart-item.style";

///////////////////////////////////////////////////////////////

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <ImageContainer src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} = ${price * quantity}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
