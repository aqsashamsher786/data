import React from "react";
import {  Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourServices";
import { SectionTitle } from "../../components/sectionTitle";
import ScrollAnimation from 'react-animate-on-scroll';
const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  color: white;
`;

const Point = styled.div`
  color: whitesmoke;
  font-size: 1.5rem;
  max-width: 50%;
  @media screen and (max-width: 480px) {
    width: 50%;
    font-size: 1rem;
  }
`;
export function ServicesSection(props) {
  return (
    <Element name="servicesSection" id = "services">
    <ServicesContainer >
    <Marginer direction="vertical" margin="4rem" />
      <SectionTitle url to="">Best Quality Software</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <SectionTitle > Services </SectionTitle>
      <OurSerivce
        title="we focus on what we know is possible"
        description="Datasets Technologies is a 24/7 turnkey analytical solution provider. It has mission to manage, control and improve all the data related to every business in the world…"
        /> 
      <Point>
          <ScrollAnimation animateIn='bounceInRight' >
          <ul>
          <li>Data Strategy: Data orchestration and integration</li>
          <Marginer direction="vertical" margin="1rem" />
          <li>Solution Architecture -Cloud and On-premise</li>
          <Marginer direction="vertical" margin="1rem" />
          <li>Modern Data Warehousing and Tools Selection </li>
          <Marginer direction="vertical" margin="1rem" />
          <li>Business Intelligence and Analytics </li>
          </ul>
         </ScrollAnimation></Point>
    </ServicesContainer></Element>
  );
}

