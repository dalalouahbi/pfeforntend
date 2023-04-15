import React, { useState } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Nav() {

  
  return (
  
   <div>




  <nav  class="navbar navbar-expand-md navbar- bg-">
    
    <img src='/img/logo.png' style={{width:"41px"}}/>
    
    <a class="navbar-brand" href="#"><g style={{color:"#007bff",fontFamily:"-moz-initial"}}> Book</g> <span style={{color:"orange"}}>paradise</span></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Shop">Shop</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/">Cart</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link" href="/contact" >Contact</a>
        </li>
      </ul>
    
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
      <a id='c'  href="#">  <svg id='icon2' style={{color:"black"}} xmlns="http://www.w3.org/2000/svg" width="40" height="18" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path id='c' d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></a>
 <a href="#"><svg id='icon1' xmlns="http://www.w3.org/2000/svg" width="40" height="18" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path id='c' d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg></a>
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" data-toggle="dropdown">
          

            <i class="fa fa-user"></i> User
            
          </a>
         
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="/SignUp">Sign up</a>
            <a class="dropdown-item" href="#">Settings</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Logout</a>
            
          </div>
        </li>
      </ul>
    </div>
  </nav>
 
   </div>


  )
}
