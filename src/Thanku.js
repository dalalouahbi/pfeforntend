// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router';
// import axios from 'axios';

// export default function Thanku() {
//   const id=useParams();
//   console.log("id",id.id);
//   const [data,setData]=useState([]);
//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/dowland/" + id.id)
//       .then(res => {
//         setData(res.data.message);
//         // const url=window.URL.createObjectURL(new Blob([res.data.url_dowlande]));
//         // const link=document.createElement('a');
//         // link.href=url;
//         // link.setAttribute('download','book.pdf');
//         // document.body.appendChild(link);
//         // link.click();
//       })
//       .catch(error => {
//         console.log("Error:", error);
//       });
//   }, []);

//   console.log("data", data);
  
//   console.log("data", data[0]);
//   console.log("data", data[1]);
//   console.log("data", data[2]);
//   const handleDownload = (url) => {
//     window.location.href = url;
//   };
  
//   // const elements = [];
//   // for (let key in data) {
//   //   // elements.push()
//   //   elements.push(
//   //     <p key={key}>
//   //       {key}: {data[key]}
//   //     </p>
//   //   );
//   // }
//     return (
//     <div>
//      {data.map((u,index)=>{
//       return(
//         <div class="card" key={index}>
//   <div class="card-body">
//     <h5 class="card-title">{u.titre}</h5>
//     {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
//     <button onClick={() => handleDownload(u.url_dowlande)}>
//         Télécharger le livre
//       </button>
//     {/* <a href="{`http://127.0.0.1:8000/api/${obj.url_dowlande}`}" class="btn btn-primary">{u.url_dowlande}</a> */}
//   </div>
// </div>
//       // <div key={index}>
//       //   <p>{u.titre}</p>
//       // </div>
//       )
//      })}
//       {/* {data.map((innerArray, outerIndex) => ( */}
//   {/* <div key={outerIndex}> */}
//     {/* {innerArray.map((obj, innerIndex) => ( */}
//       {/* <div key={innerIndex} class="card"> */}
//         {/* <div key={innerIndex} class="card" style="width: 18rem;"> */}
//   {/* <div class="card-body"> */}
//     {/* <h5 class="card-title">{obj.titre}</h5> */}
//     {/* <h6 class="card-subtitle mb-2 text-muted">{obj.format}</h6> */}
//     {/* <p class="card-text">{obj.format}</p>
//     <a href={`http://127.0.0.1:8000/api/${obj.url_dowlande}`} download> */}
//   {/* Télécharger le livre
// </a> */}

//     {/* <a href="http://127.0.0.1:8000/api/{obj.url_dowlande}" download> Télécharger le livre </a> */}

//     {/* <a href="" class="card-link" dowland>{obj.url_dowlande}</a> */}
//     {/* <a href="#" class="card-link">Another link</a> */}
//   {/* </div> */}
//   {/* </div> */}
//         {/* <p>Titre: {obj.titre}</p>
//         <p>Format: {obj.format}</p>
//         <p>URL Dowlande: {obj.url_dowlande}</p> */}
//       {/* </div>
//     ))} */}
//   {/* // </div> */}

//     {/* {data.map((obj, index) => (
//   <div key={index}>
//     <p>Titre: {obj.titre}</p>
//     <p>Format: {obj.format}</p>
//     <p>URL Dowlande: {obj.url_dowlande}</p>
//   </div>
// ))} */}
//        {/* <meta charSet="UTF-8" />
//   <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <link
//     href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
//     rel="stylesheet"
//   />
//   <div className="vh-100 d-flex justify-content-center align-items-center">
//     <div className="col-md-4">
//       <div className="" />
//       <div className="">
//         <div className="">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="text-success "
//             style={{marginLeft:"164px"}}
//             width={75}
//             height={75}
//             fill="currentColor"
//             viewBox="0 0 16 16"
//           >
//             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//             <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
//           </svg>
//         </div>
//           <div className="text-center" >
//           <h1>Thank You  !</h1>
//           <p>
//             We've send the link to your inbox. Lorem ipsum dolor sit,lorem lorem{" "}
//           </p>
//           <button className="btn btn-outline-success"><a href="/">Back Home</a></button>
//         </div>
//       </div>
//     </div>
//   </div>*/}

// {/* <div>  */}


 
//     </div>

//   )
// }

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import "./tnk.css"
import { useLocation } from 'react-router-dom';
export default function ThankYou() {
  // const id = useParams();
  const [data, setData] = useState([]);
  const location = useLocation();
  const { state } = location;
  const Nuser = location.pathname.split('/')[2];
  const id = state.id;
console.log("id",id)
console.log("Nuser",Nuser)
const idorder=id[0]
console.log("idorder",idorder)

   
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/dowland/${idorder}`)
      .then(res => {
        console.log("res",res)
        setData(res.data.message);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }, []);
console.log("data tanku",data)


  return (
    <div className=' '>
      {data.map((u, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">{u.titre}</h5>
            {/* <h5 className="card-title">{u.url_dowlande}</h5> */}
            <h5 className="card-title">{u.format}</h5>

            {/* <a href="/books/dowland/Thinking-Fast-and-Slow.pdf" download> Télécharger le livre </a> */}
            {/* <a href="/books/dowland/Brave-New-World_-_Aldous-Huxley.pdf" download> Télécharger le livre </a>
            <a href="/books/dowland/Brave-New-World_-_Aldous-Huxley.pdf" download> Télécharger le livre </a> */}
            {u.format==="tangible"?<a href={u.url_dowlande} download> Télécharger le livre </a>
            :<a href="/books/dowland/Happy Place.mp3" download>Télécharger le fichier audio</a>}
            {/* <a href={u.url_dowlande} download> Télécharger le livre </a>
            <a href="/books/dowland/Happy Place.mp3" download>Télécharger le fichier audio</a> */}

            {/* <a href='{u.url_dowland}' /> */}
            {/* C:\Users\pc\ProjectPfe2\ProjectPfe\projetPFE-frnt\public\books\dowland\Brave-New-World_-_Aldous-Huxley.pdf */}
          </div>
        </div>
      ))}
    </div>
  );
     
}
