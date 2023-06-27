import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SectionDetail from './SectionDetail';
import "./Details.css";
import Swal from 'sweetalert2';
import Avis from './Avis';
import Products from './Products';
export default function Single() {
  const [data, setData] = useState([]);
  const [avis, setAvis] = useState([]);
  const [book,setBook]=useState([]);
  const [content,setContent]=useState("");
  const [note,setNote]=useState("");
  const [error, setError] = useState('')
  const [showInputs, setShowInputs] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const toggleInputs = () => {
    setShowInputs(!showInputs);
  };

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };
  let user=JSON.parse(localStorage.getItem('user.info'));
  let Nuser=user.id

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
  // console.log("find book data",data)
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
 console.log("data book meme category", book)
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
    // console.log("data.token",data)
    const [token, setToken] = useState('');
    console.log(data)
    const addToCart =async () => {
      let user=JSON.parse(localStorage.getItem('user.info'))
      let userId=user.id
          console.log("user",userId)
          const dataAdd={
          user_id:userId,
            book_id:data.id,
            product_name:data.titre,
            product_image:data.file_path,
            quantity:quantity,
            price:data.price,
            total_price:data.price*quantity,
          }
      try {
          console.log("dataAdd",dataAdd)
          let response = await fetch('http://127.0.0.1:8000/api/addToCart', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` 
            },
            body: JSON.stringify(dataAdd)
            
            });
            let responseData = await response.json();
            console.log("response",responseData)

          if (response.status ===200) {
          Swal.fire({
            icon: 'success',
            text: 'Product Add Successfully!',
          })
        }
        else if(response.status ===400){
        Swal.fire({
          icon: 'warning',
          text: 'error Add !',
        })
      }
      } catch (error) {
        console.error('Erreur de connexion');
      }
    };
    const idBook=data.id;
    console.log("idBook",idBook)
    const dataS={
      user_id:Nuser,
      book_id:idBook,
      content:content,
      note:note,
   
  }
const send=()=>{
  axios.post("http://127.0.0.1:8000/api/addAvis",dataS).then(res=>{
    console.log("response avis",res)
  
    if (res.data.status === 200) {
      Swal.fire({
        icon: 'success',
        text: res.data.message,
      }).then(() => {
        setNote('');
        setContent('');
        window.location.reload();
      });
    }else if(res.data.status===400){
      // Swal.fire({
      //     icon: 'warning',
      //     text: 'error  Add !',
      //   })
      // Swal('All files required',"",'error');
      setError(res.data.errors);

    }
})

}
  return (
    <>
      <SectionDetail />

      <section class="product-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
            <img className="w" src={"http://127.0.0.1:8000/" + data.file_path} style={{marginRight:"240px",marginTop:"30px"}} alt="ii" width="350px" height="350px" />
            </div>
            <div class="col-md-6">
            <br />

              <h1 className='h1' style={{ color: "#21618C" }} >{data.titre}</h1>
              <br />
              <h5 style={{width:"px"}}>Auteur:{data.auteur}</h5>
              <br />
              <br />
              <h5 style={{}}>Quantity:</h5>
    <div className="containerR" >
  <div className="row" >
    <div className="col">
      <button className="btn btn-primary" id="decrementBtn" type="button" style={{position:"absolute",left:"37px"}} onClick={decrement}>-</button>
    </div>
    <div className="col">
      <input type="" className="form" value={quantity} readOnly />
    </div>
    <div className="col">
      <button className="btn btn-primary" type="button" style={{position:"absolute",right:"32px"}} onClick={increment}>+</button>
    </div>
  </div>
</div>
<br/>
<br/>
<br/>
              <p style={{ fontSize: "17px" }}>Format:{data.format}</p>
              <br />
              <p style={p1}><strong style={{ color: "black" }}>{data.price}$</strong></p>
              <br />
              <div class="container">
                <div class="row justify-content-center">
              
                  <div class="col-4">
                    <button class="btn btn-primary btn-block" style={{ width: "130px" }} onClick={addToCart}>
                      <i class="fa fa-shopping-cart" ></i> Add to Cart
                    </button>
                  </div>
               
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div>
      <h1 className='h1' style={{ textAlign: "center", color: "#21618C" }}>Add Reviews</h1>
      <br />

      {/* {showInputs && ( */}
      <div className='container'>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea style={{width:"700px"}} className="form-control" name="content" rows="5" placeholder="Enter your message" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          <small className="text-danger"> {error["content"]}</small>
        </div>
      {/* )} */}

      {/* {showInputs && ( */}
        <div className="form-group">
          <label htmlFor="message">Note:</label> <br/>
          <input type="textt" style={{width:"700px"}} name="note" value={note} onChange={(e) => setNote(e.target.value)} />
          <small className="text-danger"> {error["note"]}</small>
        </div>
      {/* )} */}

      {/* {showInputs && ( */}
        <button type="submit" style={{marginLeft:"500px",width:"200px"}} className="btn btn-primary" onClick={send}>Send</button>
      {/* )} */}
</div>
<br/>
<br/>
      <h1 className='h1' style={{ textAlign: "center", color: "#21618C" }} onClick={toggleComponent}>Book Reviews</h1>

      {showComponent && (
        <Avis data={avis} />
      )}
    </div>
      {/* <h1 className='h1' style={{textAlign:"center" ,color:"#21618C"}}>Add Reviews</h1>
      <br/>
      <div class="form-group">
            <label for="message">Message:</label>
            <textarea class="form-control" name="content" rows="5" placeholder="Enter your message" onChange={(e)=>setContent(e.target.value)}></textarea>
          </div>
          <small className="text-danger"> {error["content"]}</small>

          <div class="form-group">
            <label for="message">Note:</label>
            <input type="text" name="note" onChange={(e)=>setNote(e.target.value)}/>
          </div>
          <small className="text-danger"> {error["note"]}</small>

          <button type="submit" class="btn btn-primary" onClick={send}>Send</button>
      <h1 className='h1' style={{textAlign:"center" ,color:"#21618C"}}>Book Reviews</h1>

   <Avis data={avis} /> */}
   <br/>
   <br/>

   <h1 className='h1' style={{textAlign:"center" ,color:"#21618C"}}>Others Books</h1>
   <br/>

   <Products data={book}/>
    </>
  )
}

