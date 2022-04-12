import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0,0,0,.5);  
  height: 25px;
  width: auto;
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: #E53934;
  position: absolute;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
:hover {
    background-color: #E53934;
  }
 color: #FFF;
 text-align: center;
 padding: 4px;
 font-weight: bold;
 font-size: 15px;
 text-shadow: #000 2px 1px 0px;
`;