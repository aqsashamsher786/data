import React from 'react';
import {  Element } from "react-scroll";
import { IconContext } from 'react-icons/lib';

import { Marginer } from "../../components/marginer";
import {
  ScholarSection,
  ScholarWrapper,
  ScholarContainer,
  ScholarCard,
  ScholarCardInfo,
  ScholarCardPlan,
  ScholarCardFeatures,
  ScholarCardFeature
} from './BenefitElement';

export function BenifitCard() {
  return (
    <Element >
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <ScholarSection>
        <ScholarWrapper>
          <ScholarContainer>
          <ScholarCard >
              <ScholarCardInfo>   
                <ScholarCardPlan>Fast Data Discovery</ScholarCardPlan>
                <ScholarCardFeatures>
                  <ScholarCardFeature> AI solutions allow the efficient discovery of highly important and relevant information through fast and thorough data mining and analysis.</ScholarCardFeature>
                </ScholarCardFeatures>
              </ScholarCardInfo>
            </ScholarCard>
            <ScholarCard >
              <ScholarCardInfo>
                <ScholarCardPlan>Accurate Insights</ScholarCardPlan>
                <ScholarCardFeatures>
                  <ScholarCardFeature>AI solutions have the ability to process vast quantities of data and produce accurate and robust insights, allowing you to truly garner the value in your data.</ScholarCardFeature>
                </ScholarCardFeatures>
              </ScholarCardInfo>
            </ScholarCard>
            <ScholarCard >
              <ScholarCardInfo>
                <ScholarCardPlan>GPU Enabled</ScholarCardPlan>
                <ScholarCardFeatures>
                  <ScholarCardFeature>With Cloud-powered GPU's, the problem of running AI algorithms is a thing of the past. No need to purchase expensive hardware to create powerful models.</ScholarCardFeature>
                </ScholarCardFeatures>
              </ScholarCardInfo>
            </ScholarCard>
          </ScholarContainer></ ScholarWrapper>
          <Marginer direction="vertical" margin="1rem" />
          < ScholarWrapper>
          <ScholarContainer>
          <ScholarCard >
              <ScholarCardInfo>   
                <ScholarCardPlan>Fast Data Discovery</ScholarCardPlan>
                <ScholarCardFeatures>
                  <ScholarCardFeature> AI solutions allow the efficient discovery of highly important and relevant information through fast and thorough data mining and analysis.</ScholarCardFeature>
                </ScholarCardFeatures>
              </ScholarCardInfo>
            </ScholarCard></ScholarContainer>
        </ ScholarWrapper>
      </ScholarSection>
    </IconContext.Provider></Element>
  );
}
