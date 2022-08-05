import styled from "styled-components";

export const AreaCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  
`
export const AreaCardFilho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #9999; */
  width: 500px;
  height: 450px;
  color: white;
  border: 1px solid black;
  @media(max-width: 525px ){
    max-width: 320px;
  }
`

export const AreaNeto = styled.div`
  box-shadow: 0px 3px 16px white;
  border-radius: 25px;
  width: 400px;
  height: 400px;
  border: 1px solid black;
  @media(max-width: 525px ){
    max-width: 300px;
  }
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
export const AreaImg = styled.div`

`

export const MaxImg = styled.img`
  width: 300px;
`

