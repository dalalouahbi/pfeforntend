import React from "react";
import OurServices from "./OurServices";
import "./App.css";
import Nav from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routee from "./Routee";
import Section from "./Section";
import Shop from "./Shop";
import Product from "./Product";
import Footer from "./Footer";
import Timer from "./Timer";

function App(){
  
  return(
    <>
 <Nav/>
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