import React from "react";
import OurServices from "./OurServices";
import "./App.css";
import Nav from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routee from "./Routee";
import Section from "./Section";
import Shop from "./Shop";
import Footer from "./Footer";
import Timer from "./Timer";
import { BrowserRouter as Router } from 'react-router-dom';

function App(){
  
  return(
    <>
        <Router>
 <Nav/>
    </Router>
<div>
   { <Routee/> }
</div>

<br/>
<br/>
<br/>
<Footer/>


 </>

  )
};
export default App;