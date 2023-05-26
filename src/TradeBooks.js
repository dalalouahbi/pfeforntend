import React from 'react'
import TradeBookLists from './TradeBookLists';
import { useState, useEffect } from 'react';

export default function TradeBooks() {
    const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [])
  function getData(){
    fetch("http://127.0.0.1:8000/api/listTrade")
      .then((response) => { return response.json() })
      .then((data) => { setData(data) })
  }
  console.log("data trade book 1" ,data)
  return (
    <div>
         <div class="container">
        <div class="row">
          {
            data.map((trade, index)=>{
              return <TradeBookLists key={index} data={trade} />
            })
          }
        </div>
       
      </div>
      
    </div>
  )
}
