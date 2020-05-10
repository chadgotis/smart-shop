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
    },
    {
      id: uuid(),
      img: "../assets/burger.jpeg",
      name: "Burger Jack",
      price: 69,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere!",
    },
    {
      id: uuid(),
      img: "../assets/burger.jpeg",
      name: "Burger Ace",
      price: 59,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere!",
    },
    {
      id: uuid(),
      img: "../assets/burger.jpeg",
      name: "Burger 9",
      price: 49,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere!",
    },
  ]);

  return (
    <div className="dishlist">
      {dishes.map((dish, i) => (
        <Dish key={i} dish={dish} />
      ))}
    </div>
  );
}

export default DishList;
