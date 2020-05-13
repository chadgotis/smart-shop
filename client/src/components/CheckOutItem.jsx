import React from "react";

const CheckOutItem = ({ item }) => {
  const total = item.price * item.cart;
  return (
    <>
      <div className="item">
        <h4>{item.name}</h4>
        <p>x{item.cart}</p>
        <p>P{total.toFixed(2)}</p>
      </div>
      <hr className="hr" />
    </>
  );
};

export default CheckOutItem;
