import React, { useState } from 'react';
import Section from './Section';
import OurServices from './OurServices';
import './App.css';
import Section2 from './Section2';
import Product from './Product';

const data = [
  {id:"1", title: 'THE POWER OF NOW', description: '49',img:"./img/photo2.jpg",link:"/Detail1" },
  {id:"2", title: 'HOUSE OF SKY AND BREATH', description: '39',img:"./img/photo3.jpg",link:"/Detail2" },
  {id:"3", title: 'RICH DAD POOR DAD', description: '49',img:"./img/photo10.jpg" ,link:"/Detail3"},
  {id:"4", title: 'WHY MEN LOVE BITCHES', description: '29',img:"./img/photo5.jpg",link:"/Detail4" },
  {id:"5", title: 'THE ZURICH AXIOMS', description: '39', img:"./img/photo6.jpg",link:"/Detail5" },
  {id:"6", title: 'QUEEN OF LIGHT', description: '29' ,img:"./img/photo7.jpg" ,link:"/Detail6"},
  {id:"7", title: 'PATH OF THE DARK', description: '39' ,img:"./img/photo8.jpg" ,link:"/Detail7"},
  {id:"8", title: 'THE SUBTLE ART OF NOT GIVING A F*CK', description: '49' ,img:"./img/photo9.jpg" ,link:"/Detail8"},
 ];

const Card = ({ title, description,img,link }) => (
 

			<div class="product">
				<img src={img}/>

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

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
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
      <div className="card-list">
      {filteredData.map(item => (
          <Card key={item.title} {...item} />
        ))}
      
       
      </div>
    </div>
    <Section2/>
   
    </div>
  );
};

export default App;
