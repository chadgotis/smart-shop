import React from "react";
import Nav from "./Nav";
import SideBar from "./SideBar";
import Content from "./Content";
import "../css/App.scss";

function App() {
  return (
    <div className="container">
      <Nav />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
