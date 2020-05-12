import React from "react";
import { useSelector } from "react-redux";

const Nav = () => {
  const dishes = useSelector((state) => state.Dishes);
  const cartArr = dishes.map((dish) => dish.cart);
  let totalCart = cartArr.reduce((a, b) => a + b, 0);
  return (
    <div className="navigation">
      <div className="logo"></div>
      <ul>
        <li>
          <input type="search" placeholder="Search..." />
        </li>
        <li>
          <i className="cart las la-shopping-cart">
            <span>{totalCart}</span>
          </i>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
