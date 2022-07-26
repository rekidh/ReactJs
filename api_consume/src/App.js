
import React from "react";
import Heder from "./components/Heder";
import Hero from "./components/Hero";
import "./App.css"
import menu from "./data/menu.json"
import Aside from "./components/Aside";

function App() {
  return ( 
    <>
      <Heder menu={menu} />
      <Hero/>
      <Aside />
    </>
    );
}

export default App;
