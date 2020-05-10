import React from "react";
import asd from "../assets/burger.jpeg";

function Dish({ dish }) {
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
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dish;
