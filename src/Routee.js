import React from 'react'
import Card from "./Timer";
import Shop from "./Shop";
import Home from "./Home";
import Aff from "./Aff";

import Contact from "./Contact"
import Details from './Details';
import SignUp from "./SignUp"
import Single from "./Single"
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import { useState, useEffect } from 'react';
import "./App.css";
import Products from './Product';

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


  // const data = [
  //   {id:"1", title: 'THE POWER OF NOW', price: '49',img:"photo2.jpg",description:'THE POWER OF NOW'},
  //   {id:"2", title: 'HOUSE OF SKY AND BREATH', price: '39',img:"photo3.jpg",description:'THE POWER OF NOW'},
  //   {id:"3", title: 'RICH DAD POOR DAD', price: '49',img:"photo10.jpg" ,description:'THE POWER OF NOW'},
  //   {id:"4", title: 'WHY MEN LOVE BITCHES', price: '29',img:"photo5.jpg" ,description:'THE POWER OF NOW'},
  //   {id:"5", title: 'THE ZURICH AXIOMS', price: '39', img:"photo6.jpg" ,description:'THE POWER OF NOW'},
  //   {id:"6", title: 'QUEEN OF LIGHT', price: '29' ,img:"photo7.jpg" ,description:'THE POWER OF NOW'},
  //   {id:"7", title: 'PATH OF THE DARK', price: '39' ,img:"photo8.jpg" ,description:'THE POWER OF NOW'},
  //   {id:"8", title: 'THE SUBTLE ART OF NOT GIVING A F*CK', price: '49' ,img:"photo9.jpg" ,description:'THE POWER OF NOW'}
  //  ];
// console.log(data)
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




        {/* <Route path="/Detail1" element={<Details
        img="./img/photo2.jpg"
        name="THE POWER OF now"
        description="
        Much more than simple principles and platitudes,
         The Power of Now takes readers on an inspiring 
         spiritual
         journey to find their true and deepest self and reach the ultimate in personal 
         growth and spirituality: the discovery of truth and light. In the first chapter, Tolle introduces readers to enlightenment and its natural enemy, the mind."
        pric="49$"
        />}/>
        <Route path="/Detail2" element={<Details
        img="./img/photo1.jpg"
        name="name book2"
        description="dzscription"
        pric="00$"
        />}/>
<Route path="/Detail3" element={<Details
                img="./img/photo1.jpg"
        name="name book3"
        description="dzscription"
        pric="00$"
        />}/>
        <Route path="/Detail4" element={<Details
        img="./img/photo1.jpg"
        name="name book4"
        description="dzscription"
        pric="00$"
        />}/>
        <Route path="/Detail5" element={<Details
          img="./img/photo1.jpg"
          name="name book5"
          description="dzscription"
          pric="00$"
          />}/>
          <Route path="/Detail6" element={<Details
            img="./img/photo1.jpg"
            name="name book6"
            description="dzscription"
            pric="00$"
            />}/>
            <Route path="/Detail7" element={<Details
              img="./img/photo1.jpg"
              name="name book7"
              description="dzscription"
              pric="00$"
              />}/>
<Route path="/Detail8" element={<Details
        img="./img/photo1.jpg"
        name="name book8"
        description="dzscription"
        pric="00$"
        />}/>
        

        <Route path="/Product1" element={<Details
        img="./img/photo1.jpg"
        name="name book9"
        description="description"
        pric="00$"
        />}/>
        <Route path="/Product2" element={<Details
        img="./img/photo1.jpg"
        name="name book10"
        description="description"
        pric="00$"
        />}/>
        <Route path="/Product3" element={<Details
        img="./img/photo1.jpg"
        name="name book11"
        description="description"
        pric="00$"
        />}/>
        <Route path="/Product4" element={<Details
        img="./img/photo1.jpg"
        name="name book12"
        description="description"
        pric="00$"
        />}/>
        <Route path="/Product5" element={<Details
        img="./img/photo1.jpg"
        name="name book13"
        description="description"
        pric="00$"
        />}/>
        <Route path="/Product6" element={<Details
        img="./img/photo1.jpg"
        name="name book14"
        description="description"
        pric="00$"
        />}/>
        <Route path="/Product7" element={<Details
        img="./img/photo1.jpg"
        name="name book15"
        description="description"
        pric="00$"
        />}/>
        <Route path="/Product8" element={<Details
        img="./img/photo1.jpg"
        name="name book16"
        description="description"
        pric="00$"
        />}/>
       <Route path="/Product9" element={<Details
        img="./img/photo1.jpg"
        name="name book17"
        description="description"
        pric="00$"
        />}/>
        <Route path="/Product10" element={<Details
        img="./img/photo1.jpg"
        name="name book18"
        description="description"
        pric="00$"
        />}/>
        <Route path="/Product11" element={<Details
        img="./img/photo1.jpg"
        name="name book19"
        description="description"
        pric="00$"
        />}/>
        <Route path="/Product12" element={<Details
        img="./img/photo1.jpg"
        name="name book20"
        description="description"
        pric="00$"
   />}/> */}
   
       
   </Routes>
    </Router>
    </div>
  )
}
export default Routee