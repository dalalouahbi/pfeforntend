import {Link} from 'react-router-dom';
import React  from 'react';
import "./Product.css";
import { useState, useEffect } from 'react';

export default function TradeBookLists(props) {
    const bg={
        backgroundColor:"white"
    }
    const card={
        width:"350px"
    }
  console.log("data trade book 2" ,props.data .id)
  console.log("data trade book image" ,props.data .file_path_book)
  console.log("data trade book " ,props.data)


  return (
    <div className='col'>
    <div class="products">
    <div   class="all-products">
        <div  class="product">
    
        <Link to={`/TradeBookSingle/${props.data.id}`}>
        {/* <img src={`http://127.0.0.1:8000/trades/${props.data.file_path_book}`} alt="" width="140px" /> */}

        <img src={"http://127.0.0.1:8000/" + props.data.file_path_book} alt="" width="140px" />
        </Link>
        <div class="product-info">
                <h5 class="product-title">{props.data.titre} 
                {/* <br/> cree par{props.data.auteur} */}
                </h5>
           
            {/* <p class="product-price">{props.data.avis} $</p> */}
            {/* <p className="card-text">{props.data.description}</p> */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
        <Link to={`/TradeBookSingle/${props.data.id}`}>
        <button type="button" class="btn btn-primary" id='bt'>Trade Now</button>
        </Link>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
