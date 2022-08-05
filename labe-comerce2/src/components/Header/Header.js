import React from "react";
import * as C from "./Styled";
import vaza from "../../img/vaza.png";

function Header(props) {
  return (
    <C.AreaHeader>
      <C.AreaCenter>

        <C.FotoNome>
        <img width="100px" src={vaza}></img>
        <h1>LabeEcomerce</h1>
        </C.FotoNome>

        <C.AreaList>
          <ul>
            <li>Carrinho</li>
          </ul>
        </C.AreaList>
      </C.AreaCenter>
    </C.AreaHeader>
  );
}
export default Header;
