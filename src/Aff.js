import React, { useState } from 'react';
import Section from './Section';
import OurServices from './OurServices';
import './App.css';
import Section2 from './Section2';
import Products from './Products';

export default function Aff() {
    const data = [
        {id:"1", title: 'THE POWER OF NOW', price: '49',img:"./img/photo2.jpg",description:'THE POWER OF NOW'},
        {id:"2", title: 'HOUSE OF SKY AND BREATH', price: '39',img:"./img/photo3.jpg",description:'THE POWER OF NOW'},
        {id:"3", title: 'RICH DAD POOR DAD', price: '49',img:"./img/photo10.jpg" ,description:'THE POWER OF NOW'},
        {id:"4", title: 'WHY MEN LOVE BITCHES', price: '29',img:"./img/photo5.jpg" ,description:'THE POWER OF NOW'},
        {id:"5", title: 'THE ZURICH AXIOMS', price: '39', img:"./img/photo6.jpg" ,description:'THE POWER OF NOW'},
        {id:"6", title: 'QUEEN OF LIGHT', price: '29' ,img:"./img/photo7.jpg" ,description:'THE POWER OF NOW'},
        {id:"7", title: 'PATH OF THE DARK', price: '39' ,img:"./img/photo8.jpg" ,description:'THE POWER OF NOW'},
        {id:"8", title: 'THE SUBTLE ART OF NOT GIVING A F*CK', price: '49' ,img:"./img/photo9.jpg" ,description:'THE POWER OF NOW'}
       ];
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
<div className="card-list">
    
<Products data={data}/>
    
      </div>
      <br/>
<br/>
<br/>
<br/>
<br/><br/>


<Section2/>

    </div>
    </div>

  )
}
