import React from "react"
import Helmet from 'react-helmet';
import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import './global.css';



const helmet = () => (
  <helmet>
    <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet"/>
  </helmet>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="speexy's freecycle" />
    <Header/>
    <div className="contentWrapper">{children()}</div>
    <Footer/>
  </div>
);

export default TemplateWrapper;
