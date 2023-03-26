import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalCartValue = useSelector((state) => state.cart.items);
  const items = useSelector((state)=>state.cart.items);
  let [totalAmount, setTotalAmount] = useState(0);

  let value = totalCartValue.map((price) => price.totalPrice);
  for (let num of value) {
    totalAmount += num;
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart : {items.length}</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <h2>Total Cart Value : {totalAmount}</h2>
    </Card>
  );
};

export default Cart;
