import styled from "styled-components";
import satelite from "../../img/satelite.png";

export const ImagemTerra = styled.div`
  margin-left: 900px;
  height: 300px;
  background: url(${satelite});
  background-size: cover;
  background-position: right;
  width: 700px;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ContainerFilho = styled.div`
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
