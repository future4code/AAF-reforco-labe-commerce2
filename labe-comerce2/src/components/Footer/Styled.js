import styled from "styled-components";

export const FooterBonito = styled.footer`
  height: 80px;
  background-color: black;
  color: white;
  /* background: transparent; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media(max-width: 790px) {
    height: 100%;
}

`
export const Devs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
p {
  padding: 0px 10px;
}
@media(max-width: 790px) {
  flex-direction: column;
}
`
