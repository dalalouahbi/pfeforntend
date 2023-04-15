import React from 'react'
import Card from "./Timer";
import Shop from "./Shop";
import Home from "./Home";
import Contact from "./Contact"
import Details from './Details';
import SignUp from "./SignUp"
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";

import "./App.css";
import Product from './Product';

 function Routee() {
const data = [
  {id:"1", title: 'THE POWER OF NOW', description: '49',img:"./img/photo2.jpg" },
  {id:"2", title: 'HOUSE OF SKY AND BREATH', description: '39',img:"./img/photo3.jpg",link:"/Detail2" },
  {id:"3", title: 'RICH DAD POOR DAD', description: '49',img:"./img/photo10.jpg" ,link:"/Detail3"},
  {id:"4", title: 'WHY MEN LOVE BITCHES', description: '29',img:"./img/photo5.jpg",link:"/Detail4" },
  {id:"5", title: 'THE ZURICH AXIOMS', description: '39', img:"./img/photo6.jpg",link:"/Detail5" },
  {id:"6", title: 'QUEEN OF LIGHT', description: '29' ,img:"./img/photo7.jpg" ,link:"/Detail6"},
  {id:"7", title: 'PATH OF THE DARK', description: '39' ,img:"./img/photo8.jpg" ,link:"/Detail7"},
  {id:"8", title: 'THE SUBTLE ART OF NOT GIVING A F*CK', description: '49' ,img:"./img/photo9.jpg" ,link:"/Detail8"},
 ];

  return (
    <div>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Card" element={<Card/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        

        

      
        
        <Route path="/Detail1" element={<Details
        img="./img/photo2.jpg"
        name="THE POWER OF NOW"
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
   />}/>
   
       
   </Routes>
    </Router>
    </div>
  )
}
export default Routee