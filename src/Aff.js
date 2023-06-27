import React from 'react';
import Section from './Section';
import OurServices from './OurServices';
import './App.css';
import Section2 from './Section2';
import Products from './Products';
import { useState, useEffect } from 'react';

export default function Aff() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [])
  console.log("final data", data)

  function getData(){
    fetch("http://127.0.0.1:8000/api/list")
      .then((response) => { return response.json() })
      .then((data) => { setData(data) })
  }
  return (
        <div  className="">
     <div style={{fontFamily:" Arial, sans-serif"}}>
<Section/>
<br/>
<br/>
      
<OurServices/>
<div className="container">
<h2 id='tit'>Best seller</h2>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>
<div style={{marginTop:"-110px" }} class="input-group mb-3"></div>

   
<Products data={data}/>
    
      </div>
      <br/>
<br/>
<br/>
<br/>
<br/><br/>


<Section2/>

    </div>
    

  )
}
