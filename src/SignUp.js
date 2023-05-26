import React from 'react';
import './SignUp.css';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(email)
  console.log(password)

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user.info')) {
      // navigate('/')
    }
  }, [])
  async function signup() {
    let item = {email, password }
    console.log(item)
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-type": 'application/json',
        "Accept": 'application/json'
      }
    }
    )
    result = await result.json()
    localStorage.setItem("user.info", JSON.stringify(result))
     navigate('/')
    console.warn("result", result)
  }
  return (
    <div className="login-container">

      <video className="background-video" autoPlay loop muted>
        <source src="./img/back.mp4" type="video/mp4" />
      </video>
      <div className="login-form-container">
        <div className="login-form">
          <input style={{width:"360px"}} type="text" placeholder="email" name="email" onChange={(e)=>setEmail(e.target.value)}/> 
<input style={{width:"360px"}} type="password" name="password"placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          <button type="submit" onClick={signup} >Login</button>
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

        
        </div>
       </div>
    </div>
  );
}

export default Login;
