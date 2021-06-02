import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle";
import { Element } from "react-scroll";
import {  Marginer} from "../../../components/marginer";
const MoreAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  margin-top:1rem;
`;

const AboutContainer = styled.div`
  display: left;
  justify-content: center;
  align-items: center;
  max-width: 62.5rem;
  margin-top:1rem;

`;

const AboutText = styled.span`
  font-size: 1.25rem;
  color: #e2d5d5;
  font-weight: normal;
  line-height: 1.4;
  padding : 0.5rem;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
const H3 = styled.h3`
  font-size: 1.75rem;
  line-height: 1.4;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;


export function DataEngineering(props) {
  return (
    <Element id = "DataEngineering">
    <MoreAboutContainer >
      <SectionTitle>More About Data Engineering</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
      Addressing the modern business challenges of today entails the strong backbone of Data Engineering. Adastra offers a wide range of advanced Data, AI, and Digital services that are supported and connected with Data Engineering tools and practices. It includes modern data architecture, emerging technologies, and innovation across your organization, enabling you to be a digital leader within your industry.        
      </H3>     
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
         <AboutText>
          Each of Adastra’s service offerings, whether it is a full-scale cloud migration or intelligently automating processes with machine learning, requires a robust foundation of data extraction, integration, and governance. Data engineering entails numerous tasks, such as building and maintaining tools, infrastructure, and frameworks, providing Adastra’s practices’ the secure base that allows them to develop advanced solutions that drive businesses forward.
        </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <div>
      <SectionTitle>Services</SectionTitle>
      <div>
      <AboutContainer>
        <AboutText>  
          <H3>Systems Migration</H3>
          <Marginer direction="vertical" margin="1rem" />
          Seamlessly migrate from legacy systems to systems backed by emerging technologies.
         </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <H3>Data Integration</H3>
          <Marginer direction="vertical" margin="1rem" />
          Integrate structured, unstructured and semi-structured data using a combination of ETL and ELT techniques to make all data available in the right format at the right place.
        </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <H3>Real-Time Processing</H3>
          <Marginer direction="vertical" margin="1rem" />
          Architect batch and real-time data integration solutions to provide timely data insights to the organization. 
          </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <H3>Data Cleansing</H3>
          <Marginer direction="vertical" margin="1rem" />
          Comprehensively organize data, correcting inaccuracies, duplicates, and corruptions to remove noise and allow for accurate analysis and interpretation.  
         </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
         <H3>Feature Engineering</H3>
         <Marginer direction="vertical" margin="1rem" />
          Extracting features from data is a vital prerequisite for training machine learning models.
        </AboutText>
      </AboutContainer>
      </div>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
        The right implementation of data engineering approaches and best practices represents a crucial step in your data journey. Contact us to schedule a free discovery session with our experts today. </H3>     
      </AboutText>
      </AboutContainer>
      </div>
    </MoreAboutContainer>

    </Element>
  );
}