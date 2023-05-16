import React from 'react';
import { useParams  } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SectionDetail from './SectionDetail';
import "./Details.css"
export default function Single(props) {
    const{id}=useParams();
    // const data=props
    console.log(id)
    // console.log(data)

    const product=props.data.find((i)=>i.id===id)
    console.log("product2",product.title,product.img)
    console.log(`img/${product.img}`)


    const footer={
      backgroundColor:"#000000" ,
        color: "white",
        padding: "20px",
        fontSize: "16px",
        textAlign: "center",
      }
      const p1={
    borderRadius:"5px",
    textAlign:"end",
    color:"black"
    
      }
  return (
    <>
<SectionDetail/>
    
    <section class="product-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
        <img className="w" src={`/img/${product.img}`} alt="ii" width="350px" height="350px" />
        </div>
        <div class="col-md-6">
          <h1 className='h1' style={{color:"#007bff"}} >{product.title}</h1>
          <br/>
          <br/>
          <br/>
          
          
          <p style={{fontSize:"17px"}}>{product.description}</p>
        
            <br/>
            <p style={p1}><strong style={{color:"black"}}>{product.price}$</strong> {props.pric}</p>
        
          <br/>
         
         
        
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
</div>

        </div>
        {/* <p > <Link to={"/"} className='A'> <i class="fa fa-reply" id='io' aria-hidden="true"></i>Retourner a la page d accceuil</Link></p> */}
      </div>     
    </div>
  </section>

</>
  )
}
