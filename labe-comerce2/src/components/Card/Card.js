import React from "react";
import * as C from "./styled";

export function Card(props) {



    return (

        <C.AreaCard>
            <C.AreaCardFilho>
                <h1>{props.name}</h1>
                <img src={props.imagem}></img>
                <p>{props.valor}</p>
            </C.AreaCardFilho>
        </C.AreaCard>

    )
}