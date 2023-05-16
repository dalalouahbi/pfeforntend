import React from 'react';
import "./Details.css"

const SectionDetail = () => {
  const sectionStyle = {
    
 
   
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
    <section  className='xx' style={sectionStyle}>
      { <h1 style={h1}>Details</h1> }
      
    </section>
    </>
  )
}
export default SectionDetail;
