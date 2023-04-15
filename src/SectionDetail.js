import React from 'react';

const SectionDetail = () => {
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
      { <h1 style={h1}>Details</h1> }
      
    </section>
    </>
  )
}
export default SectionDetail;
