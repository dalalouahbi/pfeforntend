import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "./Creat.css";
export default function CreatCompte() {
  useEffect(() => {
    if (localStorage.getItem('user.info')) {
      // navigate('/')
    }
  }, [])
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordV, setPasswordV] = useState('')
  console.log(name)
  console.log(prenom)
  console.log(email)
  console.log(password)
  console.log(passwordV)
  function PasswordConfirmation() {
    if (password === passwordV) {
      console.log("correcto")
    }
    else {
      console.log("nada")
    }
  }
  async function login() {
    let item = { name, prenom, email, password }
    console.log("item",item)
    let result = await fetch("http://127.0.0.1:8000/api/signup", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-type": 'application/json',
        "Accept": 'application/json'
      }
    }
    )
    result = await result.json()
    localStorage.setItem("user.info", JSON.stringify(result.user))
    navigate('/')
    console.log("result create compte", result.user)
  }
//   axios.get('/sanctum/csrf-cookie').then(response => {
//   axios.post('http://127.0.0.1:8000/api/register',item).then()
    
// });
  return (
    <>
      <div id="login-box">
        <div class="left">
          <h1>Sign up</h1>

          <input type="text" name="name" vaue={name} placeholder="your first name" onChange={(e) => { setName(e.target.value) }} />
          <input type="text" name="prenom" placeholder="your second name " value={prenom} onChange={(e) => { setPrenom(e.target.value) }} />
          <input type="text" name="email" placeholder="E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <input type="password" name="passwordv" placeholder="Retype password" value={passwordV} onChange={(e) => { setPasswordV(e.target.value) }} />

          <input type="submit" name="signup_submit" value="Sign me up" onClick={login} />
        </div>

        <div class="right">
          <span class="loginwith">Sign in with<br />social network</span>

          <button class="social-signin facebook">Log in with facebook</button>
          <button class="social-signin twitter">Log in with Twitter</button>
          <button class="social-signin google">Log in with Google+</button>
        </div>
        <div class="or">OR</div>
      </div>
    </>
  )
}