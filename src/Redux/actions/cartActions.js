import axios from "axios";
import { URL } from "../../utils/utils";

//ADD ITEM TO CART
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${URL}/api/products/${id}`);

  dispatch({
    type: "CART_ADD_ITEM",
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//REMOVE ITEM'S FROM CART
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "CART_REMOVE_ITEM",
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//SAVE SHIPPING ADDRESS
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: "CART_SAVE_SHIPPING_ADDRESS",
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

//SAVE PAYMENT METHODE
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: "CART_SAVE_PAYMENT_METHOD",
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
