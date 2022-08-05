import React from "react";
import * as C from "./Styled";
import vaza from "../../img/vaza.png";
import {useNavigate} from "react-router-dom";

function Header() {
  const navigate = useNavigate()

  const irParaCarrinho = () => {
    navigate("/cart")
  }

  return (
    <C.AreaHeader>
      <C.AreaCenter>

        <C.FotoNome>
        <img width="100px" src={vaza}></img>
        <h1>LabeEcomerce</h1>
        </C.FotoNome>

        <C.AreaList>
          <ul>
            <buttom onClick={irParaCarrinho}>Carrinho</buttom>
          </ul>
        </C.AreaList>
      </C.AreaCenter>
    </C.AreaHeader>
  );
}
export default Header;
