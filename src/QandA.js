import React, { useState } from 'react';
import './QandA.css';

const T = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.message.value;
    setMessages((prevMessages) => [...prevMessages, { text: userInput, sender: 'user' }]);
    if (userInput === 'What\'s your name?') {
        setMessages((prevMessages) => [...prevMessages, { text: 'My name is Othmane.', sender: 'chatbot' }]);
      }
      if (userInput === 'fin ana') {
        setMessages((prevMessages) => [...prevMessages, { text: 'f casa', sender: 'chatbot' }]);
      }
       if (userInput === '') {
        setMessages((prevMessages) => [...prevMessages, { text: 'please enter your question', sender: 'chatbot' }]);
      }
    e.target.reset();
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="message-form" onSubmit={handleMessageSubmit}>
        <input type="text" name="message" placeholder="Type your message..." autoComplete="off" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default T;
