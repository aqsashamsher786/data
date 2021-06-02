import React from "react";
import styled from "styled-components/macro";
import { Marginer } from "../../components/marginer";
const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 4rem;
  flex-wrap: wrap-reverse;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

const ServiceImg = styled.img`
  width: 22em;
  height: 17em;

  @media screen and (max-width: 480px) {
    width: 18em;
    height: 13em;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;


const Title = styled.h1`
  color: white;
  font-size: 28px;
  font-weight: 700;
  margin: 5px 0;
  padding: 1rem;
  border-bottom: 0.25rem solid red;
  @media screen and (max-width: 480px) {
    margin-top: 1.5rem;
  }
`;
const SubTitle = styled.h2`
  color: white;
  font-size: 25px;
  font-weight: 600;
  margin: 5px 0;

  @media screen and (max-width: 480px) {
    margin-top: 1.5rem;
  }
`; 
const MiniTitle = styled.h2`
  color: white;
  font-size: 25px;
  font-weight: 600;
  margin: 5px 0;

  @media screen and (max-width: 480px) {
    margin-top: 1.5rem;
  }
`; 
const Details = styled.p`
  color: #7a7a7a;
  font-size: 21px;
  text-align: center;
  max-width: 55%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export function Job(props) {
  const { imgUrl, title,subtitle,minititle, description, isReversed } = props;

  return (
    <div>
    <ServiceContainer isReversed={isReversed}>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Marginer direction="vertical" margin="1rem" />
        < SubTitle>{subtitle}</SubTitle>
        < MiniTitle>{minititle}</MiniTitle>
        <Marginer direction="vertical" margin="1rem" />
        <Details>{description}</Details>
      </DescriptionContainer>
      <ServiceImg src={imgUrl} />
    </ServiceContainer>
        <Marginer direction="vertical" margin="5rem" /></div>
  );
}
