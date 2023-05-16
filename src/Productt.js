import {Link} from 'react-router-dom';
import React, { Component }  from 'react';
import "./Product.css";

function Product(props){
    console.log("product:",props)
    const bg={
        backgroundColor:"white"
    }
    const card={
        width:"350px"
    }
    return (
         <div className='col'>
        <div class="products">
   

		<div   class="all-products">
			<div  class="product">
                
            <Link to={`/Product/${props.data.id}`}>
            <img  className="" src={"http://127.0.0.1:8000/"+props.data.file_path} alt="" width="140px" />
            </Link>
            <div   class="product-info">
					<h5 class="product-title">{props.data.titre}
					</h5>
               
                <p class="product-price">{props.data.price} $</p>
                {/* <p className="card-text">{props.data.description}</p> */}
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
            <Link to={`/Product/${props.data.id}`}>
            <button type="button" class="btn btn-primary" id='bt'>Buy Now</button>
            </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
      
 
    )
  }export default Product;


  