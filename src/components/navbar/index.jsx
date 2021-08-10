import React, { useState } from "react";
import {  NavLink  } from 'react-router-dom'
import styled from "styled-components";
import { Logo } from "../logo";
import { Link } from 'react-scroll'
import './Navbar.css';
const NavbarContainer = styled.div`
  width: 100%;
  height: 3.438rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
 
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom-left-radius:5rem;
  border-top-left-radius:5rem;
  border-top-right-radius:5rem;
  border-bottom-right-radius:5rem;
  margin-top:2rem;
  height: 5rem;
  float : right;
  width: 70rem;
  margin-top: 3rem;
  background-color:black;
  @media screen and (max-width: 100rem) {
    background-color: transparent;
  }
`;

export function Navbar(props) { 
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <NavbarContainer  >
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
      <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
          <a  
          href="/#" 
          duration={500} 
          className='nav-links'

          onClick={closeMobileMenu}
            >Home</a>
          </li>
          <li className='nav-item'>
          <a  
          href="/#services" 
          duration={500} 
          className='nav-links'
          onClick={closeMobileMenu}
            >Services</a>
          </li>
          <li className='nav-item'>
          <a  
          href="/#remoteHiring" 
          duration={500} 
          className='nav-links'
          onClick={closeMobileMenu}
            >Remote Hiring</a>
          </li>
          <li className='nav-item'>
          <a  
          href="/#" 
          duration={500} 
          className='nav-links'
          onClick={closeMobileMenu}
            >About</a>
          </li>
          <li className='nav-item'>
            <NavLink 
            activeClassName='active'
            to= '/DataEngineering'   
           className='nav-links'
           onClick={closeMobileMenu}
            >
            Data Engineering
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
            activeClassName='active'
            to= '/cloud'   
           className='nav-links'
           onClick={closeMobileMenu}
            >
            Cloud
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
            activeClassName='active'
            to= '/ArtificialIntelligence'   
           className='nav-links'
           onClick={closeMobileMenu}
            >
           Artificial Intelligence
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
            activeClassName='active'
            to= '/Governance'   
           className='nav-links'
           onClick={closeMobileMenu}
            >
           Governance
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
            activeClassName='active'
            to= '/Digital'   
           className='nav-links'
           onClick={closeMobileMenu}
            >
          Digital
            </NavLink>
          </li>
          <li
            className='nav-item'         
          >
            <Link
            activeClass='active'
            to= ''
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
           className='nav-links'
           onClick={closeMobileMenu}
            >
              Success Stories
            </Link>
          </li>
          <li className='nav-item'>
            <NavLink 
            activeClassName='active'
            to= '/cv'   
           className='nav-links'
           onClick={closeMobileMenu}
            >
           cv
            </NavLink>
          </li>
          <li
            className='nav-item'           
          >
            <Link
            activeClass='active'
            to= ''
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
           className='nav-links'
           onClick={closeMobileMenu}
            >
              Blogs
            </Link>
          </li>
         
        </ul>
      </AccessibilityContainer>
    </NavbarContainer></>
  );
}

