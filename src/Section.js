import React from 'react'
import "./App.css"
 function Section() {
  const h1={
    color:"#007bff",
  }
  const p={
    color:"white"
  }
  return (
   <>
   
   <section class="hero">
    <div class="container">
      <h1 style={h1}>Welcome to <span style={{color:"orange"}}>Our Library</span></h1>
      <p style={p}>Find your favorite books and enjoy reading!</p>
     <a style={{color:"white"}} href="/Shop"> <button class="btn"  style={{background:"#007bff"}}>Explore Books</button></a>
    </div>
  </section>
   </>
  )
}
export default Section;