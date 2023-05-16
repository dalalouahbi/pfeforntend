import React from 'react';
import './SignUp.css';

function Login() {
  return (
    <div className="login-container">

      <video className="background-video" autoPlay loop muted>
        <source src="./img/back.mp4" type="video/mp4" />
      </video>
      <div className="login-form-container">
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <button type="submit" style={{backgroundColor:"orange"}}>Create account</button>
        <br/>
          <div class="container">
  <div class="row">
 
    <div class="col-sm-3 text-center">
    <a href="#"><i class="fab fa-facebook-f"></i></a>

    </div>
    <div class="col-sm-3 text-center">
    <a href="#"><i class="fab fa-twitter"></i></a>

    </div>
    <div class="col-sm-3 text-center">
    <a href="#"><i class="fab fa-instagram"></i></a>

    </div>
    <div class="col-sm-3 text-center">
    <a href="#"><i class="fab fa-linkedin-in"></i></a>

    </div>
  </div>
</div>

        
        </form>
       </div>
    </div>
  );
}

export default Login;
