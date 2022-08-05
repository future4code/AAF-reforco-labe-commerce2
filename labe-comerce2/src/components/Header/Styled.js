import styled from "styled-components";

export const AreaHeader = styled.header`
  height: 80px;
  background-color: black;
  color: white;
  background: transparent;
  display: flex;
  position: fixed;
  width: 100%;
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
  ul {
    display: flex;
    list-style-type: none;
   
  }
  li {
    padding: 20px;
  }
  @media(max-width: 795px){
    display: none;
  }
`
