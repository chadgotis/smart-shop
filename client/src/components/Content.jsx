import React from "react";
import DishList from "./DishList";
const Content = () => {
  return (
    <div className="main-content">
      <div className="slide">
        <div className="burger"></div>
        <div className="slide-text">
          <h1>Burger King Pares</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <i className="arrow las la-angle-right"></i>
        </div>
      </div>
      <main>
        <DishList />
      </main>
    </div>
  );
};

export default Content;
