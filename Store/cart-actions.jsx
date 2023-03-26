
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  let URL = `http://localhost:4000/products`;
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(URL);

      if (!response.ok) {
        console.log("Could not fetch cart data");
      }
      const data = await response.json();
      console.log("data", data);
      return data;
    };

    try {
      const cartData = await fetchData();
      console.log("cartData",cartData)
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      console.log(error.message)
    }
  };
};

export const sendCartData = (cart) => {
  let URL = `http://localhost:4000/products`;
  return async (dispatch) => {
    
    // console.log("Sending Cart Data!")

    const sendRequest = async () => {
      const response = await fetch(URL, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        console.log("Send Cart Data Failed!");
      }

      try {
        await sendRequest();
        console.log("Sent Cart Data Successfully!")
      } catch (error) {
        console.log("Sending Cart Data Failed!",error)
      }
    };
  };
};
