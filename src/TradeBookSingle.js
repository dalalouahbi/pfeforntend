import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./Details.css"
export default function TradeBookSingle() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log("params data", id)
  useEffect(() => {
    getData();
  }, [])
  function getData() {
    fetch("http://127.0.0.1:8000/api/findTrade/" + id)
      .then((response) => { return response.json() })
      .then((data) => { setData(data[0]) })
  }
  console.log("data trdae",data)
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
  return (
    <div>
      <section class="product-section"> 
         <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img className="w" src={"http://127.0.0.1:8000/" + data.file_path_book} alt="ii" width="350px" height="350px" />
            </div>
            <div class="col-md-6">
              <h1 className='h1' style={{ color: "#068DA9" }} >{data.titre}</h1>
              <br />
              <h4 style={{}}>{data.auteur}</h4>
              <br />
              <br />


              <p style={{ fontSize: "17px" }}> <span style={{ color: "#068DA9" }}>description:</span>{data.description}</p>
              <p style={{ fontSize: "17px" }}><span style={{ color: "#068DA9" }}>avis:</span>{data.avis}</p>



              <br />
              {/* <p style={p1}><strong style={{ color: "black" }}>{data.price}$</strong></p> */}

              <br />

              <div class="container">
                <div class="row justify-content-center">
            
                  <div class="col-4">
                    <button class="btn btn-info btn-block" style={{ width: "130px" }}>
                      <i class="fa fa-credit-card"></i><a href='/MessageTrade'>Buy Now</a> 
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section> 
    </div>
  )
}
