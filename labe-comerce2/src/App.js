import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import { Carrinho } from "./Pages/Carrinho/Carrinho";
function App() {

  const [tela, setTela] = useState("home")
  const [cart, setCart] = useState([])


  const mudaTela = () => {
    switch (tela) {
      case "home":
        return <Home  cart={cart} setCart={setCart}/>
      case "cart":
        return <Carrinho cart={cart} setCart={setCart}/>
      default:
        return <p>erro</p>
    }
  }

  const escolheTela = (url) => {
    setTela(url)
  }

  return (
    <div>
      <Header escolheTela={escolheTela}/>
        {mudaTela()}
      <Footer />

    </div>
  );
}

export default App;
