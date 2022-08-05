import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import { useState } from "react";
import Cart from "./Pages/Home/Cart/Cart";

function App() {

  return (
    <div>
      <Header />
      <Home />
      <Footer />
 
    </div>
  );
}

export default App;
