const { default: styled } = require("styled-components");

export const SectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;
