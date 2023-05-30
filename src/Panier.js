import React from 'react'
import { useState, useEffect } from 'react';
export default function Panier() {
  const [data, setData] = useState([]);
//   useEffect( async ()=>{
//     let result =await fetch("http://127.0.0.1:8000/api/card");
//     let fresult =await result.json();
//     setData("card data",fresult);
//   },[])
  useEffect(() => {
    getData();
  }, [])
  console.log("final data", data)
  async function deleteOperation(id){
    let result=await fetch("http://127.0.0.1:8000/api/delete/"+id,{
      method:"DELETE"
    });
    result= await result.json();
    getData();
    console.warn("delee result",result)
  }
  function getData(){
    fetch("http://127.0.0.1:8000/api/card")
      .then((response) => { return response.json() })
      .then((data) => { setData(data) })
  }
  return (
    <div>
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
  </tbody>
</table>


    {/* <div className="col-sm-6 offset-sm-3">
      
      <h1>product list</h1>
      <Table>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>price</td>
          <td>description</td>
          <td>image</td>
          <td>operations</td>
        </tr>
        {/* {
          data.map((item) => 
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td><img src={"http://127.0.0.1:8000/"+item.file_path} width="50px" /></td>
              <td><span onClick={()=> deleteOperation(item.id)} className='deleted'>deleted</span></td>
              <td>
                <Link to={"update/"+item.id}>
                <span className='update'>update</span>
                </Link>
                </td>


            </tr>
          )
        } */}
      {/* </Table> */}
    {/* </div>  */}
    </div>

  )
}
