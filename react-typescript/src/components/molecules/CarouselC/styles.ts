import styled from "styled-components";

export const Container = styled.div`
  max-width: 40rem;
  position: absolute;
  margin: 2rem;
`
export const Image = styled.img`
  object-fit: cover;
`
export const TextContainer = styled.div`
  max-width: 35rem;
  position: relative;
  z-index: 2;
  bottom: 9rem;
  left: 1em;
  color: #f5f5f5;
  text-shadow: #000 2px 1px 1px;
  font-size: 1rem;
  margin: auto;
`
export const Carousel = styled.div`
  height: 27rem;
  img {
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
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
  height: 25rem;
  overflow: hidden;
`
export const ContainerLabel = styled.div`
  bottom: 25rem;
  position: relative;
`