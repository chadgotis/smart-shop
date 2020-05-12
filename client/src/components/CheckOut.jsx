import React from "react";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const dishCart = useSelector((state) => state.Dishes);
  let cartItems = dishCart.filter((dish) => dish.cart > 0);
  // console.log(cartItems.length > 0 ? "true" : "false");

  return (
    <div className="checkout">
      <p>Cart Items</p>
      {cartItems.length > 0 ? (
        cartItems.map((item, i) => (
          <div key={i} className="item">
            <p>{item.name}</p>
            <p>{item.cart}</p>
          </div>
        ))
      ) : (
        <p>No Items</p>
      )}
    </div>
  );
};

export default CheckOut;
