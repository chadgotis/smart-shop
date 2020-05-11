import React from "react";
import asd from "../assets/burger.jpeg";

function Dish({ dish, incrementCartHandler, decrementCartHandler }) {
  return (
    <div className="dish-container">
      <div className="dish">
        <div className="dish-image">
          <img src={asd} alt="food" />
        </div>
        <div className="dish-text">
          <h3>{dish.name}</h3>
          <p>P{dish.price}.00</p>
          <div className="button-center">
            {dish.cart === 0 ? (
              <button onClick={() => incrementCartHandler(dish.id)}>
                Add to Cart
              </button>
            ) : (
              <div className="action-tbn">
                <button onClick={() => incrementCartHandler(dish.id)}>+</button>
                {dish.cart}
                <button onClick={() => decrementCartHandler(dish.id)}>-</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dish;
