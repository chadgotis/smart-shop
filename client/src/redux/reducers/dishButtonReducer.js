import uuid from "uuid";
const initialState = [
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
];

const dishReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map((dish) =>
        dish.id === action.payload ? { ...dish, cart: dish.cart + 1 } : dish
      );
    case "DECREMENT":
      return state.map((dish) =>
        dish.id === action.payload ? { ...dish, cart: dish.cart - 1 } : dish
      );
    case "RESET":
      return (state = initialState);
    default:
      return state;
  }
};

export default dishReducer;
