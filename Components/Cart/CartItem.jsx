import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../../Store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, total, price } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.actions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.actions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          Rs{total.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (Rs{price.toFixed(2)} / item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
