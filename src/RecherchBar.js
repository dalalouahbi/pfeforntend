import React from 'react';
import Section from './Section';
import OurServices from './OurServices';
import './App.css';
import Section2 from './Section2';
import Products from './Products';
import { useState, useEffect } from 'react';

export default function Aff() {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState(' ');
  const [category, setCategory] = useState(' ');
  const [format, setFormat] = useState(' ');

  useEffect(() => {
    getData();
  }, [])

  function getData(){
    fetch("http://127.0.0.1:8000/api/list")
      .then((response) => { return response.json() })
      .then((data) => { setData(data) })
  }
  async function search(key){
    console.warn(key);
    let result= await fetch("http://127.0.0.1:8000/api/search/"+key);
    result= await result.json();
    console.warn(result);
    setData(result);
}
const handleSortChange = (e) => {
  setSortOrder(e);
  console.log('xxx',e)
  handleSubmit(e);
};
const handleSubmit = (sort) => {
  console.log('Sort Order:', sort);
  fetch('http://127.0.0.1:8000/api/filtrer/'+sort, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sort_order: sort }),
  })
    .then((response) => response.json())
    .then((data) => {setData(data)})
  console.log(' Order:', data);
};
const handleCategory = (e) => {
  setCategory(e);
  console.log('cat e',e)
  handleSubmitCategory(e);
};
const handleSubmitCategory = (cat) => {
  console.log('cat:', cat);
  fetch('http://127.0.0.1:8000/api/grouper/'+cat, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category: cat }),
  })
    .then((response) => response.json())
    .then((data) => {setData(data)})
  console.log(' cat:', data);
};
const handleFormat = (e) => {
  setFormat(e);
  console.log('format e',e)
  handleSubmitFormat(e);
};
const handleSubmitFormat = (format) => {
  console.log('format:', format);
  fetch('http://127.0.0.1:8000/api/format/'+format, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ format: format }),
  })
    .then((response) => response.json())
    .then((data) => {setData(data)})
  console.log(' format:', format);
};

  return (
        <div  className="">
     <div style={{fontFamily:" Arial, sans-serif"}}>
<div style={{marginTop:"-110px" }} class="input-group mb-3"></div>
<div className=''>
<input  type="text" className='' style={{width:"500px", borderRadius:"5px",
    width: "500px",
    borderRadius: "5px",
    float: "right" /* Aligns the input to the right side */,
    marginRight: "16px" /* Adds some space between the input and other elements */,
  }} placeholder="Search" onChange={(e)=>search(e.target.value)} /> <br />  
<select name="sort_order" id="sort_order" value={sortOrder} onChange={(e)=>handleSortChange(e.target.value)}>
        <option value="" >Sort prix</option>
        <option value="desc">Décroissant</option>
        <option value="asc">Croissant</option>
</select>

<select name="category" id="category" value={category} onChange={(e)=>handleCategory(e.target.value)}>
        <option value="">Group by category</option>
        <option value="Philosophy">Philosophy</option>
        <option value="personal development">personal developement</option>
        <option value="science fiction">science fiction</option>

</select>
<select name="format" id="format" value={format} onChange={(e)=>handleFormat(e.target.value)}>
        <option value="">Choisir un format</option>
        <option value="audiobbok">audio book</option>
        <option value="tangible">tangible</option>

</select>
<Products data={data}/>
    
      </div>
      <br/>
<br/>
<br/>
<br/>
<br/><br/>
</div>

{/* <Section2/> */}

    </div>
    

  )
}
