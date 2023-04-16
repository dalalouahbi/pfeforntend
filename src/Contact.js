import "./Contact.css"
import React, { useState } from 'react';

 function Contact() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };
  return (
    
    <>
    <div class="container">
      <div class="contact-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control"  id="username" value={username} onChange={handleUsernameChange} required style={{width:"500px"}} placeholder="Enter your name"/>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email"  />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
      </div>

      
    </>
  )
}
export default Contact