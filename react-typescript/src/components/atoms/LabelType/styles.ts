import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0,0,0,.5);  
  height: 25px;
  border-left-width: 5px;
  border-left-style: solid;
  border-left-color: #E53934;
  position: absolute;
  display: flex;
  align-items: center;
  margin: 1.2rem;
  overflow: hidden;
`;

export const Text = styled.p`
  :hover {
    background-color: #E53934;
   }
  color: #FFF;
  text-align: center;
  padding: 5px;
  font-weight: bold;
  font-size: 15px;
  text-shadow: #000 2px 1px 0px;
`;