import React from 'react'
import "./Product.css";
import Timer from './Timer';

export default function Section2( ) {
  
  return (
   <section className='time__count'>
    <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img src={"./img/photo4.jpg"} alt="Image" class="img-fluid"/>
      </div>
      <div class="col-md-6">
        <h2>Limited Offres</h2>
    <Timer/>

        <p>From #1 New York Times bestselling author Julia Quinn comes the story of Daphne Bridgerton, in the first of her beloved Regency-set novels featuring the charming, powerful Bridgerton family, now a series created by Shondaland for Netflix</p>
    <a href='/Shop'> <button  className="btn btn-outline-primary" style={{fontFamily:"sans-serif",width:"220px",}}>visit store </button>
     </a>
      </div>
    </div>
  </div>
 
  </section>


  )
}
