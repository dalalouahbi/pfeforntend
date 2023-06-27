import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./Panier.css"
export default function Panier() {
  const [data, setData] = useState([]);
  let user=JSON.parse(localStorage.getItem('user.info'));
  // console.log("Panier user",user.id)
let Nuser=user.id
  var totalPrcie=0
  useEffect(() => {
    getData();
  }, [])
  console.log("panier data", data)
  async function deleteOperation(id){
    let result=await fetch("http://127.0.0.1:8000/api/delete/"+id,{
      method:"DELETE"
    });
    result= await result.json();
    if (result.status ===200) {
      Swal.fire({
        icon: 'success',
        text: ' card delete successuflty!',
      })
    }
    else{
    Swal.fire({
      icon: 'warning',
      text: 'error  Add !',
    })
  }
    getData();
    console.warn("delee result",result)
  }
  function getData(){
    fetch("http://127.0.0.1:8000/api/card/"+Nuser)
      .then((response) => { return response.json() })
      .then((data) => { setData(data) })
  }

  return (
    <div className='container'>
<br/>
<br/>

        <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Book</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total_Price</th>
      <th scope="col">operations</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((card,index)=>{
          totalPrcie+=card.price*card.quantity
            return(
                <tr key={index}>
                    <td><img src={"http://127.0.0.1:8000/"+card.product_image} width="50px" /></td>
                    <td>{card.product_name}</td>
              <td>{card.price}</td>
      
              <td>{card.quantity}</td>
              <td>{card.total_price}</td>
            <td><button type="button" class="btn btn-danger" onClick={()=> deleteOperation(card.id)} >Delete</button></td>
                </tr>
            )
        })
    }
  
    <div class="dd">
      <h3 style={{}}>Total:{totalPrcie}$</h3>
      <Link to="/checkOut"><button class="btn btn-primary">checkOut</button></Link>
    </div>
  </tbody>
</table>
    </div>

  )

      }