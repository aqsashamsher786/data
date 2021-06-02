import React from "react";
import {  Element } from "react-scroll";
import styled from "styled-components";
import { OurSerivce } from "../../components/ourServices";
import { SectionTitle } from "../../components/sectionTitle";
const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  color: white;
`;


export function Remotehire(props) {
  return (
    <Element name="RemotehireSection" id = "remoteHiring">
    <ServicesContainer >
      <SectionTitle >How to remote hire?</SectionTitle>
      <OurSerivce
        title="it's a difficult time but we are here to help."
        description="Our services have always been configured to make remote recruiting easier. Now, more than ever, we are utilising tech-focused solutions to support your hiring in 3 simple steps…"
      /> 
    </ServicesContainer></Element>
  );
}


