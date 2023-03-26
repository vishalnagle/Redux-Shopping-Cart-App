import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Components/Cart/Cart";
import Layout from "./Components/Layout/Layout";
import Products from "./Components/Shop/Products";
import { sendCartData, fetchCartData } from "./Store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let cartQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    fetchCartData();
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [dispatch, cart]);
  return (
    <Fragment>
      <Layout>
        {cartQuantity ? <Cart /> : null}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
