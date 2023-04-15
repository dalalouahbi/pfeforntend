import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';

const data = [
  { title: 'Card 1', description: 'This is the first card.',img:"./img/photo1.jpg" , href:"/Product1" },
  { title: 'Card 2', description: 'This is the second card.',img:"./img/photo1.jpg" , href:"/Product2" },
  { title: 'Card 3', description: 'This is the third card.',img:"./img/photo1.jpg" , href:"/Product3" },
  { title: 'Card 4', description: 'This is the fourth card.',img:"./img/photo1.jpg", href:"/Product4"  },
  { title: 'Card 5', description: 'This is the fourth card.', img:"./img/photo1.jpg", href:"/Product5"  },
  { title: 'Card 6', description: 'This is the fourth card.' ,img:"./img/photo1.jpg", href:"/Product6"   },
  { title: 'Card 7', description: 'This is the fourth card.' ,img:"./img/photo1.jpg" , href:"/Product7"  },
  { title: 'Card 8', description: 'This is the fourth card.' ,img:"./img/photo1.jpg", href:"/Product8"   },
  { title: 'Card 9', description: 'This is the fourth card.' ,img:"./img/photo1.jpg", href:"/Product9"   },
  { title: 'Card 10', description: 'This is the fourth card.' ,img:"./img/photo1.jpg", href:"/Product10"  },
  { title: 'Card 11', description: 'This is the fourth card.' ,img:"./img/photo1.jpg", href:"/Product11"  },
  { title: 'Card 12', description: 'This is the fourth card.' ,img:"./img/photo1.jpg", href:"/Product12"  },
];

const Card = ({ title, description,img,href }) => (
 

			<div class="product">
				<img src={img}/>

				<div class="product-info">
					<h4 class="product-title">
                       { title }
					</h4> <p></p>
                    <i class="bi bi-star-fill"></i>
					<p class="product-price">${description}</p>
 
					<a class="product-btn" href={href} style={{color:"white"}} >Buy Now</a>

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
 
       <div style={{marginTop:"-110px" }} class="input-group mb-3">
        <input style={{width:"450px",height:"50px"}} type="text" placeholder="Search categories" 
        value={searchTerm}
        onChange={handleSearch}
      />
</div>
      <div className="card-list">
        {filteredData.map(item => (
          <Card key={item.title} {...item} />
        ))}
       
      </div>
    </div>
  );
};

export default App;
