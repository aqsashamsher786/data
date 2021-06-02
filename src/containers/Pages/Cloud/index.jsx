import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle";
import { Element } from "react-scroll";
import {  Marginer} from "../../../components/marginer";
import {  NavLink as Linktag} from 'react-router-dom';
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
  }
`;

const H2 = styled.h2`
  font-size: 1.75rem;
  line-height: 1.4;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 0.99rem;
  }
`;
export function Cloud(props) {
  return (
    <Element id = "cloud">
    <MoreAboutContainer >
      <SectionTitle>More About Cloud</SectionTitle>
      <AboutContainer>
      <AboutText>
            Dataset's is a premium partner of the three main cloud providers. 
            {" "}  <Linktag style={{ color :"#807a7a"}} to = '/'>Microsoft, Amazon Web Services (AWS)</Linktag> {" "} 
          {" "} and <Linktag style={{ color :"#807a7a"}} to = '/'>Google Cloud Platform (GCP).</Linktag>{" "}and will help ensure that your organization's{" "}
          <Linktag  style={{ color :"#807a7a"}}  to = '/' > modern architecture </Linktag>{" "}supports and powers your business strategy.
        </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <H2>Microsoft:</H2> Dataset is Microsoft’s fastest growing Data and AI partners in Canada and has delivered enterprise grade solutions to organizations across industry and size. We are proud recipients of the Microsoft IMPACT Award, Commercial Enterprise Partner of the Year and Manufacturing Application Innovation awards.
        </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <H2>AWS:</H2> Our group company, <Linktag style={{ color :"#807a7a"}} to = '/'> Aroa,</Linktag> is a Select AWS Partner that dedicatedly offers services on the AWS platform. We specialize in delivering fast analytics on the Cloud and provide a suite of services around Data Estate Modernization, AI & Analytics, Governance and Managed Services. 
        </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <H2>GCP:</H2> Our group company, <Linktag style={{ color :"#807a7a"}} to = '/'> As a proud partner of Google Cloud Platform (GCP),</Linktag> we ensure a smooth migration to GCP and help our clients leverage the wide range of features and applications that differentiate GCP in the market.
        </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
        Our partnerships with the Big Three and our in-depth understanding of the features and benefits of all the cloud platforms puts us in the ideal position to guide you on your cloud journey, including helping you make choices that will work best for your organization. </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>Leverage the endless potential of the Cloud, allowing for a lean and agile operation, and stay ahead of your competition.
            </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <h1>Cloud Strategy</h1>
          <Marginer direction="vertical" margin="2rem" />
          POC’s and Production Pilots are effective tools for getting traction inside your organization around the myriad benefits of Cloud. While gaining quick buy-in is critical, establishing a vision for Cloud in the organization will help to ensure success and longevity beyond the initial Pilots. A Cloud Strategy will clearly articulate objectives, define the target state architecture, and establish business and technology guidelines for all future Cloud initiatives. It can also be used as a communication tool inside the organization to say, “Here’s how and why we’ll use Cloud to create a competitive advantage”. Don’t get lost in the clouds. Build a strategy to guide your Cloud journey. </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <Marginer direction="vertical" margin="2rem" />
          Dataset’s Cloud experts will work with you to understand your strategic objectives, define your target architecture, assess current state gaps and define a roadmap to success. Allow our team to accelerate your POC’s and amplify your production projects by defining a sound Cloud Strategy. We build strategies and provide original solutions to grow your business with peace of mind.
          </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <h1>Cloud Migration</h1>
          <Marginer direction="vertical" margin="2rem" />
          Transforming decades of legacy solutions from on-premise infrastructure to the Cloud doesn’t happen overnight. Successful migrations leverage a tried and tested framework and follow a purposeful plan that starts with measured pilots and continues through prioritized iterations, ensuring business value is evaluated at each step of the way. Take the first step on your journey toward the scalability and flexibility of the Cloud following a thoughtful migration plan.
          </AboutText>
      </AboutContainer>
      <AboutContainer>
        <AboutText>
          <h1>Cloud Migration</h1>
          <Marginer direction="vertical" margin="2rem" />
          Dataset's Cloud experts leverage our Cloud 360 methodology to guide organizations through Assessment, Discovery, Targeting, Planning, Piloting and Migration steps. We help to de-risk your migration and accelerate your time to value. Let our experts guide you on your journey to the Cloud.
            </AboutText>
      </AboutContainer>
    </MoreAboutContainer>
   </Element>
  );
}