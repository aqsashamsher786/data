import React from "react";
import styled, { css } from "styled-components";
import DataSet from "../../assets/logo/DataSet.png";
import { theme } from "../../theme";
import { Link } from "react-router-dom";
const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;
  margin-top : 0.25rem;
  ${({ inline }) =>
    inline &&
    css`
      width: 5rem;
      height: 4rem;
      margin-right: 0.25rem;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
    `};
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "1.75rem" : small ? "1rem" : "2rem"};
  color: ${({ inline }) => (inline ? "black" : theme.primary)};
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export function Logo(props) {
  const { inline, small } = props;

  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImg src={DataSet} inline={inline} small={small} />
      <StyledLink to="/">
      <LogoText inline={inline} small={small}>
        Dataset
      </LogoText></StyledLink>
    </LogoContainer>
  );
}
