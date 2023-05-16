import React from 'react'
import "./Details.css"
import CardDetail from './CartDetails'
import SectionDetail from './SectionDetail'
import App from './RecherchBar'

export default function Details(props) {
	
  const footer={
	backgroundColor:"#000000" ,
    color: "white",
    padding: "20px",
    fontSize: "16px",
    textAlign: "center",
  }
  const po={
	textAlign:"center",
	marginLeft:"300px"
	
  }
 
  return (
    <div>
     <SectionDetail/>

	<main>
		<section class="product-section">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<img   src={props.img} alt="Product Image" class="img-fluid"/>
					</div>
					<div class="col-md-6">
						<h1 className='h1' style={{color:"#007bff"}}>{props.name}</h1>
						<br/>
						<br/>
						<br/>
						
						
						<p style={{fontSize:"17px"}}>{props.description}</p>
						<br/>
						<br/>
						<br/>
						<p style={po}><strong style={{color:"black"}}></strong> {props.pric}</p>
          

						<div class="container">
  <div class="row justify-content-center">
    <div class="col-4">
      <button  class="btn btn-primary btn-block" style={{width:"130px"}}>
        <i class="fa fa-download"></i> Download
      </button>
    </div>
    <div class="col-4">
      <button class="btn btn-success btn-block" style={{width:"130px"}}>
        <i class="fa fa-shopping-cart"></i> Add to Cart
      </button>
    </div>
    <div class="col-4">
      <button class="btn btn-info btn-block" style={{width:"130px"}}>
        <i class="fa fa-credit-card"></i> Buy Now
      </button>
    </div>
  </div>
</div></div>
				</div>     
			</div>
		</section>

		<section class="product-details">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						
					</div>
				</div>
			</div>
			

		</section>
	</main>


<div>


<br/>
<br/>
<br/>
<br/>
<App/>
</div>
</div>
  )
}
