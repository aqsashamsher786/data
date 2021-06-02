import React from 'react';
import { Button } from '../../../globalStyle';
import {  Element } from "react-scroll";
import { IconContext } from 'react-icons/lib';
import { Marginer } from "../../../components/marginer";
import {
  LinkSection,
  LinkWrapper,
  LinkContainer,
  LinkCard,
  LinkCardInfo,
  LinkCardPlan,
  LinkCardFeatures,
  LinkCardFeature
} from '../linkElement';

export function Governancelink() {
  return (
    <Element name="GovernancelinkSection" id = "Governancelink">
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <LinkSection>
        <LinkWrapper>
          <LinkContainer>
          <LinkCard to='/'>
              <LinkCardInfo>   
                <LinkCardPlan>Data Governance</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>It is a continuous program that ensures data is recognized and treated as a valuable asset and that it serves users' needs and delivers valuable insights.</LinkCardFeature>
                </LinkCardFeatures>
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard>
            <LinkCard to='/'>
              <LinkCardInfo>   
                <LinkCardPlan>Data Quality</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>Data Quality Enable your data to drive your strategic direction by implementing a robust data quality management (DQM) strategy.</LinkCardFeature>
                </LinkCardFeatures>
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard>
            <LinkCard to='/'>
              <LinkCardInfo>   
                <LinkCardPlan>Metadata Management</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>Aims at correctly defining, integrating, managing, and sharing reliable metadata within an organization.</LinkCardFeature>
                </LinkCardFeatures>
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard>
         </LinkContainer></ LinkWrapper>
            <Marginer direction="vertical" margin="1rem" />
            < LinkWrapper> <LinkContainer>
            <LinkCard to='/'>
              <LinkCardInfo>   
                <LinkCardPlan>Master Data Management</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>(MDM) is a technology-enabled discipline in which business and Information Technology  work together to ensure the uniformity......</LinkCardFeature>
                </LinkCardFeatures>
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard> 
            <LinkCard to='/'>
              <LinkCardInfo>   
                <LinkCardPlan>Reference Data Management</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>Classify and categorize your information to provide context across the enterprise and ensure data consistency.</LinkCardFeature>
                </LinkCardFeatures>
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard>
          </LinkContainer>
        </ LinkWrapper>
      </LinkSection>
    </IconContext.Provider></Element>
  );
}
