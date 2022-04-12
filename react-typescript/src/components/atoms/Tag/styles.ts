/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";

type ColorProps = {
    color: string;
}
export const Container = styled.a<ColorProps>`
  background-color: ${(props) => props.color};   
  border-radius: 2px;
  padding: 2px 5px;
  color: #FFF;
  font-size: 13px;
  text-shadow: #000 1px 1px 0px;
  margin: 0 3px 0 0;
`;

