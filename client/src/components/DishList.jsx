import React, { useState } from "react";
import Dish from "./Dish";
import uuid from "uuid";

function DishList() {
  const [dishes, setDishes] = useState([
    {
      id: uuid(),
      img: "../assets/burger.jpeg",
      name: "Burger Queen",
      price: 79,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere!",
      cart: 0,
    },
    {
      id: uuid(),
      img: "../assets/burger.jpeg",
      name: "Burger Jack",
      price: 69,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere!",
      cart: 0,
    },
    {
      id: uuid(),
      img: "../assets/burger.jpeg",
      name: "Burger Ace",
      price: 59,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere!",
      cart: 0,
    },
    {
      id: uuid(),
      img: "../assets/burger.jpeg",
      name: "Burger 9",
      price: 49,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere!",
      cart: 0,
    },
  ]);

  const incrementCartHandler = (id) => {
    const updateDish = dishes.map((dish) =>
      dish.id === id ? { ...dish, cart: dish.cart + 1 } : dish
    );
    setDishes(updateDish);
  };
  const decrementCartHandler = (id) => {
    const updateDish = dishes.map((dish) =>
      dish.id === id ? { ...dish, cart: dish.cart - 1 } : dish
    );
    setDishes(updateDish);
  };

  // const addToCartHandler = (id) => {
  //   const updateDish = dishes.map((dish) =>
  //     dish.id === id ? { ...dish, cart: +1 } : dish
  //   );
  //   setDishes(updateDish);
  // };

  return (
    <div className="dishlist">
      {dishes.map((dish, i) => (
        <Dish
          key={i}
          dish={dish}
          incrementCartHandler={incrementCartHandler}
          decrementCartHandler={decrementCartHandler}
        />
      ))}
    </div>
  );
}

export default DishList;
