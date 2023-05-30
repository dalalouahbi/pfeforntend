import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SectionDetail from './SectionDetail';
import "./Details.css";
import Swal from 'sweetalert';

export default function Single() {
  const [data, setData] = useState([]);
  const [avis, setAvis] = useState([]);
  const [book,setBook]=useState([]);

  const { id } = useParams();
  console.log("params", id)
  useEffect(() => {
    getData();
  }, [])
  useEffect(() => {
    getAvis();
  }, [])
  function getData() {
    fetch("http://127.0.0.1:8000/api/findBook/" + id)
      .then((response) => { return response.json() })
      .then((data) => { setData(data[0]) })
  }
  console.log("find book data",data)
  function getAvis() {
    fetch("http://127.0.0.1:8000/api/avis/" + id)
      .then((response) => { return response.json() })
      .then((avis) => { setAvis(avis) })
  }
  console.log("avis book data",avis)
 
  console.log("daata", data.category)

  useEffect(() => {
    if (data.category) {
      axios.get('http://127.0.0.1:8000/api/categoryBook/' + data.category)
        .then(response => {
          setBook(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [data.category]);
 console.log("data book", book)
  const footer = {
    backgroundColor: "#000000",
    color: "white",
    padding: "20px",
    fontSize: "16px",
    textAlign: "center",
  }
  const p1 = {
    borderRadius: "5px",
    textAlign: "end",
    color: "black"

  }
    const [quantity, setQuantity] = useState(1);
  
    const increment = () => {
      if (quantity < 10) {
      setQuantity(quantity + 1);
    }
    };
    const decrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
    console.log("data.token",data)
    const [token, setToken] = useState('');
    const addToCart =async () => {
        const dataAdd={
            product_id:data.id,
            product_name:data.titre,
            product_image:data.file_path,
            quantity:quantity,
            price:data.price,
            total_price:data.price*quantity,
          }
          // console.log("dataadd",dataAdd)
      try {
        let response = await fetch('http://127.0.0.1:8000/api/addToCard', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` 
          },
          body: JSON.stringify({ dataAdd})
        });
  
        if (response.ok) {
          console.log('Produit ajouté au panier avec succès');
        } else {
          console.error('Erreur lors de l\'ajout du produit au panier');
        }
      } catch (error) {
        console.error('Erreur de connexion');
      }
    };
    // const AddToCard=(e)=>{
    //   e.preventDefault();
    //   console.log("data.id",data.titre)
    //   const dataAdd={
    //     product_id:data.id,
    //     product_name:data.titre,
    //     product_image:data.file_path,
    //     quantity:quantity,
    //     price:data.price,
    //     total_price:data.price*quantity,
    //   }
      // const headers = {
      //   'Authorization': `Bearer ${token}`,
      //   'Content-Type': 'application/json',
      // };
      // console.log("data.id222",dataAdd)

      // axios.post('http://127.0.0.1:8000/api/addToCard',data ,{headers}).then((res)=>{
      //   console.log("res",res) ;
      //   if(res.data.status ===200){
      //     Swal("success",res.data.message,"success");
      //   }else if(res.data.status ===400){
      //     Swal("warning",res.data.message,"warning");
      //   }else if(res.data.status ===401){
      //     Swal("error",res.data.message,"error");
      // }

    
      // })
    // }
  return (
    <>
      <SectionDetail />

      <section class="product-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img className="w" src={"http://127.0.0.1:8000/" + data.file_path} alt="ii" width="350px" height="350px" />
            </div>
            <div class="col-md-6">
              <h1 className='h1' style={{ color: "#068DA9" }} >{data.titre}</h1>
              <br />
              <h4 style={{}}>{data.auteur}</h4>
              <br />
              <br />
              {/* <div class="input-group">
  <span class="input-group-btn">
    <button className="input-group-text" type="button" onclick="decrement()">-</button>
  </span>
  <input id="quantity" type="text" class="form-control" value="1" readonly />
  <span class="input-group-btn">
    <button className="input-group-text" type="button" onclick="increment()">+</button>
  </span>
  </div> */}
  <div className="input-group">
      <div className="input-group-prepend">
        <button className="btn btn-primary" type="button" onClick={decrement}>-</button>
      </div>
      <input type="text" className="form-control" value={quantity} readOnly />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" onClick={increment}>+</button>
      </div>
    </div>
              {/* <p style={{ fontSize: "17px" }}>{data.description}</p> */}
              {/* <p style={{ fontSize: "17px" }}>Category:{data.category}</p> */}
              <p style={{ fontSize: "17px" }}>Format:{data.format}</p>
              <br />
              <p style={p1}><strong style={{ color: "black" }}>{data.price}$</strong></p>
              <br />
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-4">
                    <button class="btn btn-primary btn-block" style={{ width: "130px" }}>
                      <i class="fa fa-download"></i> Download
                    </button>
                  </div>
                  <div class="col-4">
                    <button class="btn btn-success btn-block" style={{ width: "130px" }} onClick={addToCart}>
                      <i class="fa fa-shopping-cart" ></i> Add to Cart
                    </button>
                  </div>
                  <div class="col-4">
                    <button class="btn btn-info btn-block" style={{ width: "130px" }}>
                      <i class="fa fa-credit-card"></i> Buy Now
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

