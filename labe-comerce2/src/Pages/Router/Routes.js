import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../Home/Home";
import Cart from "../Home/Cart/Cart";

function Routes() {


return(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
)
}
export default Routes;