import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkSection = styled.div`
  padding: 5rem;;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color :  transparent;
  @media screen and (max-width: 960px) {
  padding:2rem;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const LinkCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 15rem;
  height: 20rem;
  text-decoration: none;
  border-radius: 4px;
  @media screen and (max-width: 960px) {
    height: 22rem;
  }
  
  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const LinkCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const LinkCardIcon = styled.div`
  margin: 24px 0;
`;

export const LinkCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;



export const LinkCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
 
`;

export const LinkCardFeature = styled.li`
  margin-bottom: 10px;
`;
