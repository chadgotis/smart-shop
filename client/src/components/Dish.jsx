import React from "react";
import asd from "../assets/burger.jpeg";
import {
  incrementOrder,
  decrementOrder,
} from "../redux/actions/dishButtonActions";
import { useDispatch } from "react-redux";

function Dish({ dish }) {
  const dispatch = useDispatch();

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
              <button onClick={() => dispatch(incrementOrder(dish.id))}>
                Add to Cart
              </button>
            ) : (
              <div className="action-btn">
                <button onClick={() => dispatch(incrementOrder(dish.id))}>
                  +
                </button>
                <p>{dish.cart}</p>
                <button onClick={() => dispatch(decrementOrder(dish.id))}>
                  -
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dish;
