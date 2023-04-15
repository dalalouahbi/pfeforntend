import React from 'react';
import Section2 from './Section2';
import Slider from './SectionShop';
const Shop = () => {
  const sectionStyle = {
    backgroundImage: 'url("./img/photo1.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '250px',
   
  };
const h1={
      color:"white",
  
  fontWeight: "bold",
  position:"absolute",
  top:"3.89cm",
  left: "43%",


}
  return (
      <>
    <section style={sectionStyle}>
      { <h1 style={h1}>Products</h1> }
      
    </section>
<Slider/>
<Section2
/>
</>
  );
};

export default Shop;
