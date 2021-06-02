import styled, { createGlobalStyle } from 'styled-components';
import { theme } from "./theme";
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 81.25rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 3.125rem;
  padding-left: 3.125rem;
  @media screen and (max-width: 991px) {
    padding-right: 1.875rem;
    padding-left: 1.875rem;
  }
`;

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? "5px 8px" : "7px 15px")};
  border-radius:0.313rem;
  background-color: ${theme.primary};
  color: #fff;
  font-weight: bold;
  font-size: ${({ small }) => (small ? "12px" : "16px")};
  outline: none;
  border: 0.125rem solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    padding: ${({ small }) => (small ? "5px 4px" : "5px 15px")};
  border-radius:0.313rem;
  background-color: ${theme.primary};
  color: #fff;
  font-weight: bold;
  }
  &:hover {
    background-color: transparent;
    border: 0.125rem solid ${theme.primary};
  }

`;

export function Button(props) {
  const { size } = props;

  return (
    <ButtonWrapper size={size} className={props.className}>
      {props.children}
    </ButtonWrapper>
  );
}

export default GlobalStyle;
