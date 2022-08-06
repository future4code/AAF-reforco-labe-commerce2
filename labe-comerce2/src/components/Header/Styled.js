import styled from "styled-components";

export const AreaHeader = styled.header`
  height: 80px;
  background-color: black;
  color: white;
  background: transparent;
  display: flex;
  position: fixed;
  width: 100%;
  padding: 0px 10px;
`

export const AreaCenter = styled.header`
display: flex;
justify-content: space-between;
align-items:center;
margin: auto;
width: 100%;
 @media(max-width: 795px){
  justify-content: center;
 }
`
export const FotoNome = styled.div`
  display: flex;
  align-items: center;
  
`

export const AreaList = styled.div`
  button {
  color: white;
  background: transparent;
  padding: 5px 10px;
  border: solid white 1px;
  border-radius: 10px;
  margin-top: 5px;
  transition: 0.2s;
  :hover{
    background-color: #393186;
  }
}
`
