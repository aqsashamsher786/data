import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../../components/marginer";
import { Job } from "../../../components/ourJob";
import { SectionTitle } from "../../../components/sectionTitle";
import Service1Img from "../../../assets/illustrations/img1.jpeg";
import Service2Img from "../../../assets/illustrations/img2.jpg";
import Service3Img from "../../../assets/illustrations/img3.jpg";
import { Button } from '../../../globalStyle';
import {NavLink} from "react-router-dom";
const ServicesContainer = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;
const Container = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  @media screen and (max-width: 480px) {
    height : 45rem;
  }
`;
export function OurJob(props) {
  return (
    <Element id = "Job">
    <ServicesContainer >
      <SectionTitle>Featured Jobs</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <Container>
      <Job
        title="Senior Manager, Portfolio Strategy"
        subtitle= "London"
        minititle= "£90k - £100K"
        description="A software business within a FTSE 100 information services company are seeking an experienced Strategy Manager for Cloud Product Strategy. Focused on decisioning Software as a Service (SaaS) this is a global role is responsible for the strategic 5 year plan. "
        imgUrl={Service1Img}
      />
      </Container>
    <NavLink to='/'>
     <Button  primary>Choose Plan</Button>
     </NavLink>
     <Marginer direction="vertical" margin="2rem" />
      <Container>
      <Job
        title="Senior Java Developer"
        subtitle= "London"
        minititle= "£100k - £130k"
        description="A financial services group with a global network spanning over 30 countries is hiring a Senior Java Developer. They're looking for a confident and self-motivating developer with a solid understanding of high performance architectures and APIs."
        imgUrl={Service2Img}   
        isReversed
      />
     </Container>
     <NavLink to='/'>
     <Button  primary>Choose Plan</Button>
     </NavLink>
     <Marginer direction="vertical" margin="2rem" />
     <Container>
      <Job
        title="DevOps Engineer (Machine Learning)"
        subtitle= "London"
        minititle= "£45k - £50k"
        description="DevOps Engineer needed to join an interesting company who use AI and machine learning to Re-vision farming to allow better welfare and transparency, track progress and make data-driven change."
        imgUrl={Service3Img}
      />
      </Container>
      <NavLink to='/'>
     <Button  primary>Choose Plan</Button>
     </NavLink>
     <Marginer direction="vertical" margin="2rem" />
    </ServicesContainer></Element>
  );
}