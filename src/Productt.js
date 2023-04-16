import {Link} from 'react-router-dom';
import React, { Component }  from 'react';
function Product(props){
    return (
      <div className="col">
        <div className="card shadow-sm">
            <Link to={`/Product/${props.data.id}`}>
            <img className="bd-placeholder-img card-img-top" src={`img/${props.img}`} alt="" />
            </Link>
            <div className="card-body">
                <p className="card-title">{props.data.title}</p>
                <p className="card-text">{props.data.price}</p>
                {/* <p className="card-text">{props.data.description}</p> */}
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
            <Link to={`/Product/${props.data.id}`}>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
            </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }export default Product;


  