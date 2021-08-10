import React from "react";
import App from "./src/index";
import { Element } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.css';

export function CV(props) {
  return (
    <>
       <Element id = "cv">
      <App/>
      </Element>
    </>
  );
}