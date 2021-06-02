import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/company_team.jpg";
import { Marginer } from "../../components/marginer";
const Container = styled.div`
 width: 100%;
  height: 60rem;
  padding-left:2rem;
  padding-right:2rem;
  padding-bottom:2rem;
  position: relative;
  background-color: black;
  @media screen and (max-width: 480px) {
    height:20rem;
    padding:0rem;
  }
`;
const TopContainer = styled.div`
 width: 100%;
  height: 50rem;
  top: 1rem;
  padding-left:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  position: relative;
  background-color: white;
  @media screen and (max-width: 480px) {
    top: 0rem;
    height:20rem;
    padding:0rem;
    
  }
`;
const TopContainer1 = styled.div`
  width: 100%;
  height: 40rem;
  top: 2rem;
  padding-left:2rem;
  padding-top:2rem;
  padding-right:2rem;
  padding-bottom:2rem;
  background-color: white;
  position: relative;
  @media screen and (max-width: 480px) {
    height:20rem;
    padding:0rem;
    top:0rem;
  }
`;
const MiddleContainer = styled.div`
  width: 100%;
  padding-top:4.5rem;
  padding-bottom:4.5rem;
  background-image: url(${BackgroundImg});
  position: relative;
  @media screen and (max-width: 480px) {
   
    top:0rem;
    height:20rem;
    background-size:cover;
    background-position:center;
  }
`;
const BackgroundFilter = styled.div`
  width: 50%;
  height: 30rem;
  padding : 0;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 480px) {
    height:10rem;
  
  }
`;

const MotivationalText = styled.h1`
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  margin: 0;
  text-align: center;
  @media screen and (max-width: 480px) {
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.2;
  }
`;
const Textcontainer = styled.h1`
 font-size: 2.125rem;
  font-weight: 500;
  line-height: 1.2;
  color: #fff;
  margin: 0;
  text-align: center;
  border-top: 0.25rem solid red;
  width:80%;
 @media screen and (max-width: 480px) {
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.2;
  border-top: 0.12rem solid red;
  }
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 1.563rem;
  left: 50%;
  transform: translateX(-50%);
  
  @media screen and (max-width: 480px) {
    
  }
`;

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };

  return (
    <Element name="topSection" id ="home">
     <Container><TopContainer>
        <TopContainer1>
        <MiddleContainer>
        <BackgroundFilter>
          <Marginer direction="vertical" margin="4rem" />
          <MotivationalText>Software Development</MotivationalText>
          <MotivationalText>From the Best in the Industry</MotivationalText>
          <Marginer direction="vertical" margin="4rem" />
          <Textcontainer>
          <Marginer direction="vertical" margin="2rem" />
            Remote Hiring Solution
          </Textcontainer>
          <Marginer direction="vertical" margin="4rem" />
          <DownArrowContainer onClick={scrollToNextSection}>
          </DownArrowContainer>
        </BackgroundFilter>
        </MiddleContainer></TopContainer1></TopContainer></Container> 
    </Element>
  );
}
