import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-236cd-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) throw new Error("Could not fetch cart data");
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      // No need to transform because thats what we sent 'PUT'
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error", //in the Notification component
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-236cd-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT", // Put overrides data, POST adds data
          // body: JSON.stringify(cart),
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success", //in the Notification component
          title: "Success!",
          message: "Sent cart data succesfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error", //in the Notification component
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
