
import React from "react";
import Heder from "./components/Heder";
import Hero from "./components/Hero";
import "./App.css"
import menu from "./data/menu.json"
import HeroCard from "./components/HeroCard";
import { Body } from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return ( 
    <div className="container">
      <Heder menu={menu} />
      <Hero/>
      <HeroCard/>
      <Body />
      <Footer />
    </div>
    );
}

export default App;
