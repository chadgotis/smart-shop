import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheckout } from "../redux/actions/checkOutActions";
import CheckOut from "./CheckOut";

const Nav = () => {
  const dishes = useSelector((state) => state.Dishes);
  const cartArr = dishes.map((dish) => dish.cart);
  let totalCart = cartArr.reduce((a, b) => a + b, 0);
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);

  return (
    <div className="navigation">
      <div className="logo"></div>
      <ul>
        <li>
          <input type="search" placeholder="Search..." />
        </li>
        <li onClick={() => dispatch(toggleCheckout())}>
          <i className="cart las la-shopping-cart">
            <span>{totalCart}</span>
          </i>
        </li>
        {toggle ? <CheckOut /> : ""}
      </ul>
    </div>
  );
};

export default Nav;
