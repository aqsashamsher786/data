import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #1f1f1f;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 62.5rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 2rem;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 30rem) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem;
  text-align: left;
  width: 10rem;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 30rem) {
    margin: 0;
    padding: 0.625rem;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h3`
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: red;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 62.5rem;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 62.5rem;
  margin: 2.5rem auto 0 auto;

  border-top: 0.063rem solid white;
  padding-top: 0.75rem;
  @media screen and (max-width: 30rem) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;


export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
`;
