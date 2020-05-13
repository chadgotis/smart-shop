import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCheckout } from "../redux/actions/dishButtonActions";
import CheckOutItem from "./CheckOutItem";

const CheckOut = () => {
  const dishCart = useSelector((state) => state.Dishes);
  let cartItems = dishCart.filter((dish) => dish.cart > 0);
  // console.log(cartItems.length > 0 ? "true" : "false");
  let getAllCart = cartItems.map((item) => item.cart * item.price);
  let totalPrice = getAllCart.reduce((a, b) => a + b, 0);
  const dispatch = useDispatch();

  return (
    <div className="checkout">
      <h3>Cart Items</h3>
      {cartItems.length > 0 ? (
        cartItems.map((item, i) => <CheckOutItem key={i} item={item} />)
      ) : (
        <p className="no-item">Cart Empty...</p>
      )}
      {cartItems.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ marginLeft: "auto" }}>
            Total:{" "}
            <span style={{ fontWeight: "bold" }}>P{totalPrice.toFixed(2)}</span>
          </p>
          <button
            onClick={() => dispatch(resetCheckout())}
            style={{
              display: "block",
              padding: ".5rem",
              border: "none",
              background: "#882A2B",
              outline: "none",
              cursor: "pointer",
              color: "white",
              margBottom: ".5rem",
            }}
          >
            Reset
          </button>
          <button
            style={{
              display: "block",
              padding: ".5rem",
              border: "none",
              background: "wheat",
              outline: "none",
              cursor: "pointer",
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CheckOut;
