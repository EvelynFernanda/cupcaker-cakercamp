import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  max-width: 900px;
  font-family: sans-serif;
  margin: auto;
  color: rgba(0,0,0,.8);
  border-bottom: 3px solid #E53934;
  display: flex;
  cursor: pointer;

    :hover{
      h3{
        color: #E53934;
      }
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
export const Main = styled.div`
  margin-left: 20px;

`
export const ContainerLabel = styled.div`
  position: absolute;
  bottom: 30px;
  left: 5px;
  right: 0;
 
`

export const ContainerImg = styled.div`
  // overflow: hidden;
  // width: 300px;
  height: 195px;
  position: relative;
  display: flex;
  // align-items: flex-end;

  img {
    width: 300px;
    height: 100%;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    // object-fit: cover;
    
  }
`
export const Title = styled.h3`
  font-weight: 500;
  margin: 5px 0 10px 0;

  

`
export const Description = styled.h4`
  font-weight: 500;
  margin-top: 0;

`
export const ContainerTags = styled.div`
  padding: 0 0 0 5px;
  display: flex;
  align-items: center;
`

export const Footer = styled.span`
  font-size: 13px;
  margin-left:5px;

`
export const ContainerDetails = styled.div`
  display: flex;
  margin-top: 75px;
  justify-content: space-between;
`
export const Comments = styled.div`
  margin-right: 5px;
 
`
export const ContainerComments = styled.div`
  display: flex;

`