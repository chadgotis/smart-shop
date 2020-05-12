import React from "react";
import Dish from "./Dish";
import { useSelector } from "react-redux";

function DishList() {
  const dishes = useSelector((state) => state.Dishes);

  // const incrementCartHandler = (id) => {
  //   const updateDish = dishes.map((dish) =>
  //     dish.id === id ? { ...dish, cart: dish.cart + 1 } : dish
  //   );
  //   setDishes(updateDish);
  // };
  // const decrementCartHandler = (id) => {
  //   const updateDish = dishes.map((dish) =>
  //     dish.id === id ? { ...dish, cart: dish.cart - 1 } : dish
  //   );
  //   setDishes(updateDish);
  // };
  return (
    <div className="dishlist">
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default DishList;
