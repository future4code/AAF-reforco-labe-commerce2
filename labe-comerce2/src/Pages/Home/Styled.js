import styled from "styled-components";
import astro from "../../img/meteoroastro.png"


export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const ContainerFilho = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 100px;
`
export const Filtrozin = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 100px;


select {
  color: white;
  border: solid white 1px;
  background-color: transparent;
  padding: 4px 10px;
  border-radius: 10px;
}
input{

  color: white; 
  border: solid white 1px;
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 10px;
} 
`

