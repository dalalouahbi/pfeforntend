import React from 'react'
import "./Product.css";
export default function Product(props) {
  return (
   
    <div class="products">
        <div className='container'>
		
        </div>
		<div class="all-products">
			<div class="product">
				<img src={props.img1}/>
				<div class="product-info">
					<h4 class="product-title">BOOK1
					</h4>
                    <p></p>
					<p class="product-price">$129</p>
  <div className="card-overlay">Add to cart</div>
                    <div class="star-rating">
</div>
<a class="product-btn" href="#">Buy Now</a>

				</div>
			</div>
			<div class="product">
				<img src={props.img1}/>
				<div class="product-info">
					<h4 class="product-title">BOOK2
					</h4>
					<p class="product-price">$299</p>
					<a class="product-btn" href="#">Buy Now</a>

				</div>
			</div>
			<div class="product">
				<img src={props.img1}/>
				<div class="product-info">
					<h4 class="product-title">
                        book3 
					</h4> <p></p>
                    <i class="bi bi-star-fill"></i>
					<p class="product-price">$999</p>
                   
					<a class="product-btn" href="#">Buy Now</a>

				</div>
			</div>
			<div class="product">
				<img src={props.img1}/>
				<div class="product-info">
					<h4 class="product-title">
						BOOK4</h4>
					<p class="product-price">$629*</p>
					<a class="product-btn " href="#">Buy Now</a>

				</div>
			</div>
		</div>
  
  
  
  
  
  </div>
  )
}