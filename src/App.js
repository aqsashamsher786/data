import React, { Component,useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { Homepage } from "./containers/homepage";
import { Cloud } from "./containers/Pages/Cloud";
import { Footer } from "./components/Footer/Footer";
import { Marginer } from "./components/marginer";
import { Navbar } from "./components/navbar";
import { TopSection } from "./containers/homepage/topSection";
import { BrowserRouter as Router , Switch,Route,withRouter, useLocation} from 'react-router-dom'
import { DataEngineering } from "./containers/Pages/DataEngineering";
import { ArtificialIntelligence } from "./containers/Pages/ArtificalIntelligence/AI";
import { Governance } from "./containers/Pages/Governance/Governance";
import { OurJob } from "./containers/Pages/Job/job";
import {CV} from "./containers/cv"
const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
function _ScrollToTop(props) {
  const { pathname } = useLocation();
        useEffect(() => {
         window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)
export default class App extends Component {
  
  render() {
    return (
  <Router>
    <PageContainer>
      <ScrollToTop>
      <Navbar/>
      <TopSection />
      <Switch>
         <Route path="/" exact component= {Homepage} />  
         <Route path='/cloud' exact component= {Cloud} /> 
         <Route path='/DataEngineering' exact component= {DataEngineering} />  
         <Route path='/ArtificialIntelligence' exact component= {ArtificialIntelligence} /> 
         <Route path='/Governance' exact component= { Governance} />
         <Route path='/Job' exact component= {OurJob} />
         <Route path='/cv' exact component= {CV} />
      </Switch>
    <Marginer direction="vertical" margin="4rem" />
  
      <Footer/>
      </ScrollToTop>
      
    </PageContainer>
    </Router>
  );
}
}
