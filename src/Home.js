import React, { useState } from 'react';
import Section from './Section';
import OurServices from './OurServices';
import './App.css';
import Section2 from './Section2';
const Card = ({ title, description,img,link }) => (
 

			<div class="product">
				<img src={img} />

				<div class="product-info">
					<h4 class="product-title">
                       { title }
					</h4> <p></p>
                    <i class="bi bi-star-fill"></i>
					<p class="product-price">${description}</p>
 
					<a class="product-btn" href={link}  >Buy Now</a>

				</div>
  </div>
  
);
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };
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
<div style={{marginTop:"-110px" }} class="input-group mb-3">
       
</div>
    </div>
    <Section2/>
   
    </div>
  );
};

export default App;
