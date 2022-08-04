import React from "react";
import * as C from "./Styled";

function Header() {
  return (
    <C.AreaHeader>
      <C.AreaCenter>
        <h1>LabeEcomerce</h1>

        <C.AreaList>
          <ul>
            <li>Home</li>
            <li>Login</li>
            <li>Suporte</li>
            <li>Configurações</li>
          </ul>
        </C.AreaList>
      </C.AreaCenter>
    </C.AreaHeader>
  );
}
export default Header;
