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
  const p1={
backgroundColor:"orange",
borderRadius:"5px",
textAlign:"center",
color:"black"

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
						<p style={p1}><strong style={{color:"black"}}>Price:</strong> {props.pric}</p>
          
						<button type="button" class="btn btn-primary">Add to Cart</button>
					</div>
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
			<div className=' row col-12'>

<CardDetail
title="livraison disponible"
src="./img/OIP.png"
/>
<CardDetail
title="visitor"
src="./img/R.png"

/>
<CardDetail
title="payement securise"
src="./img/pay1.jpeg"

/>
<CardDetail
title="buy"
src="./img/shopping-bag.png"

/>
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
