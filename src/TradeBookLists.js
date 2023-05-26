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
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     getData();
//   }, [])
//   function getData(){
//     fetch("http://127.0.0.1:8000/api/listTrade")
//       .then((response) => { return response.json() })
//       .then((data) => { setData(data) })
//   }
  console.log("data trade book 2" ,props.data .id)
  return (
    <div className='col'>
    <div class="products">
    <div   class="all-products">
        <div  class="product">
            
        <Link to={`/TradeBookSingle/${props.data.id}`}>
        <img  className="" src={"http://127.0.0.1:8000/"+props.data.file_path_book} alt="" width="140px" />
        </Link>
        <div class="product-info">
                <h5 class="product-title">{props.data.titre} cree par{props.titre}
                </h5>
           
            {/* <p class="product-price">{props.data.avis} $</p> */}
            {/* <p className="card-text">{props.data.description}</p> */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
        <Link to={`/TradeBookSingle/${props.data.id}`}>
        <button type="button" class="btn btn-primary" id='bt'>Trade book Now</button>
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
