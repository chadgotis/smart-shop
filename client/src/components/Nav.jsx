import React from "react";

const Nav = () => {
  return (
    <div className="navigation">
      <div className="logo"></div>
      <ul>
        <li>
          <input type="search" placeholder="Search..." />
        </li>
        <li>
          <i className="cart las la-shopping-cart">
            <span>5</span>
          </i>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
