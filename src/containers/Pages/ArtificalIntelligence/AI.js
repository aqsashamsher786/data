import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle";
import { Element } from "react-scroll";
import {  Marginer} from "../../../components/marginer";
import {BenifitCard} from "../../../components/benefit/benefitCards"
const MoreAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  margin-top:1rem;
`;

const AboutContainer = styled.div`
  display: flex;
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
    font-size: 0.99rem;
    padding : 0.5rem;
  }
`;

const H3 = styled.h3`
  font-size: 1.75rem;
  line-height: 1.4;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 0.99rem;
  }
`;


export function ArtificialIntelligence(props) {
  return (
    <Element id = "ArtificialIntelligence">
    <MoreAboutContainer >
      <SectionTitle>More About Artificial Intelligence</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
        Artificial Intelligence is the latest piece of the puzzle that is needed to stay ahead of the competitive curve. There are more available applications now than ever before, enabling you to integrate real AI into your business.
       </H3>     
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
         <AboutText>
         Sophisticated models use advanced mathematical algorithms and deep neural networks to constantly improve themselves with new incoming data. From intelligent underwriting to machine failure prediction, Artificial Intelligence is a fundamental piece that will help you be prepared for disruptions and opportunities alike. The possibilities with AI are endless, start experiencing the benefits today. 
          </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
     
      <SectionTitle>Applications</SectionTitle>
      
      <AboutContainer>
        <AboutText>  
          <H3>AI-Powered Chatbots</H3>
          <Marginer direction="vertical" margin="1rem" />
          From increasing productivity within your business to improving customer service, AI-Driven chatbots effortlessly integrate with your website or mobile app, supporting a variety of processes. Chatbots seamlessly handle both internal and external interactions, allowing for applications such as scheduling meetings and answering FAQ's.
         </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <H3>Fraud Detection</H3>
          <Marginer direction="vertical" margin="1rem" />
          Leverage AI to prevent fraudulent activity within each form of communication. Uncover fraudulent behavior within text and structured data sources through text and numerical anomaly detection techniques. For image anomaly detection, our team of data scientists will utilize CNN and GANs. Additionally, the latest form of fraud detection is DeepFake detection, which uncovers the manipulation and alteration of audio and video. We leverage powerful GANs to detect if a file is a manipulated DeepFake and protect your organization and clients from this advanced fraudulent behavior.
           </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <H3>Real-time Analytics</H3>
          <Marginer direction="vertical" margin="1rem" />
          Get valuable insights in real-time from a wide variety of data, allowing for efficient decision-making and enhanced customer experience. Adastra's AI solutions can provide real-time analytics for a wide variety of use cases, from analyzing your supply chain's function to recognizing an individual by leveraging voice biometrics during a customer service call. 
           </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <BenifitCard/>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
        This client required the automation and digitization of as many activities as possible, within the target group​. They required a solution to automatically process car damage claims and to automate the calculation of freight delivered parts.
        </H3>     
      </AboutText>
      </AboutContainer>
    
    </MoreAboutContainer>

    </Element>
  );
}