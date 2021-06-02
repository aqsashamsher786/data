import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

export function Footer(props) {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/'>Clients</FooterLink>
            <FooterLink to='/'>Values</FooterLink>
            <FooterLink to='/'>Mission</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Tools & Environment</FooterLinkTitle>
            <FooterLink to='/'>Microsoft Azure Cloud</FooterLink>
            <FooterLink to='/'>Power BI</FooterLink>
            <FooterLink to='/'>Azure Synapse</FooterLink>
            <FooterLink to='/'>Data Lake</FooterLink>
            <FooterLink to='/'>BLOB Storage</FooterLink>
            <FooterLink to='/'>Microsoft Analysis Server</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Focused Industry</FooterLinkTitle>
            <FooterLink to='' >Banks & Financial Services</FooterLink>
            <FooterLink to=''>Insurance Companies</FooterLink>
            <FooterLink to=''>Retail</FooterLink>
            <FooterLink to=''>Influencer</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            DATASET
          </SocialLogo>
          <WebsiteRights>DATASET © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}
