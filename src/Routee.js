import React from 'react'
import Card from "./Timer";
import Shop from "./Shop";
import Home from "./Home";
import Aff from "./Aff";
import QandA from './QandA';
import Contact from "./Contact"
import Details from './Details';
import TradeBook from './TradeBook';
import TradeBooks from './TradeBooks';
import TradeBookSingle from './TradeBookSingle';
import SignUp from "./SignUp"
import Single from "./Single"
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import { useState, useEffect } from 'react';
import "./App.css";
import Products from './Product';
import CreatCompte from './CreatCompte';
 function Routee() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [])
  console.log("final data route", data)

  function getData(){
    fetch("http://127.0.0.1:8000/api/list")
      .then((response) => { return response.json() })
      .then((data) => { setData(data) })
  }
  console.log("route data 2", data)


  return (
    <div>
  <Router>
    <Routes>
      <Route path="/" element={<Aff/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Card" element={<Card/>}/>
        <Route path="/Product" element={<Products data={data} />}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path='/Product/:id' element={<Single/>} />
        <Route path="/QandA" element={<QandA/>}/>
        <Route path="/CreatCompte" element={<CreatCompte/>}/>
        <Route path="/tradeBook" element={<TradeBook/>}/>
        <Route path="/tradeBookList" element={<TradeBooks/>}/>
        <Route path="/TradeBookSingle/:id" element={<TradeBookSingle/>}/>

       
   </Routes>
    </Router>
    </div>
  )
}
export default Routee