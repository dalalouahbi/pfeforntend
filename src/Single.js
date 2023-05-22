import React from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionDetail from './SectionDetail';
import "./Details.css"
export default function Single() {
  const [data, setData] = useState([]);
  const [avis, setAvis] = useState([]);
  const [book,setBook]=useState([]);
  const [dataB, setDatab] = useState({ category: '' });

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
              <h1 className='h1' style={{ color: "#007bff" }} >{data.titre}////{data.auteur}</h1>
              <br />
              <br />
              <br />


              <p style={{ fontSize: "17px" }}>{data.description}</p>
              <p style={{ fontSize: "17px" }}>{data.category}</p>


              <br />
              <p style={p1}><strong style={{ color: "black" }}>{data.price}$</strong> {data.format}</p>

              <br />



              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-4">
                    <button class="btn btn-primary btn-block" style={{ width: "130px" }}>
                      <i class="fa fa-download"></i> Download
                    </button>
                  </div>
                  <div class="col-4">
                    <button class="btn btn-success btn-block" style={{ width: "130px" }}>
                      <i class="fa fa-shopping-cart"></i> Add to Cart
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
            <p > <Link to={"/"} className='A'> <i class="fa fa-reply" id='io' aria-hidden="true"></i>Retourner a la page d accceuil</Link></p>
          </div>
        </div>
      </section>

    </>
  )
}
