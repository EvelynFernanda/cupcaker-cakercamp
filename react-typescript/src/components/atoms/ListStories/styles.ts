import styled from "styled-components";

export const Container = styled.div`
  max-width: 200px;
`
export const ContainerImg = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 90px;
  height: 90px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #c1cad9;

 :hover{
    border: 2px solid #E53934;
 }

  img:hover {
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  img {
    border-radius: 50%;
    object-fit: cover;
    max-width: 100%;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

`;
export const Text = styled.p`
  margin: 5px;
  color: #444;
  font-size: 12px;
  text-align: center;

`