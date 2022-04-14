import styled from "styled-components";

export const Container = styled.div`
  max-width: 50rem;
  position: relative;
  margin: auto;
`
export const Image = styled.img`
  object-fit: cover;
`
export const TextContainer = styled.div`
  max-width: 40rem;
  position: absolute;
  bottom: 3rem;
  left: 6.5rem;
  color: #f5f5f5;
  text-shadow: #000 2px 1px 1px;
  font-size: 1rem;
`
export const Carousel = styled.div`
  img {
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    width: 100%;
  }
 
  :hover{
    img{
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
     p {
      background-color: #E53934; 
    }
  }
 
`
export const ContainerImg = styled.div`
  height: 30rem;
  overflow: hidden;
  max-width: 50rem;
`
export const ContainerLabel = styled.div`
  bottom: 30rem;
  position:  absolute;

`