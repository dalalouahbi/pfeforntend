import React, { useState } from 'react';
import './QandA.css';

const T = () => {
  const [messages, setMessages] = useState([]);

   const handleMessageSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.message.value;
    setMessages((prevMessages) => [...prevMessages, { text: userInput, sender: 'user' }]);
    if (userInput === "What's your name?") {
      setMessages((prevMessages) => [...prevMessages, { text: 'My name is Othmane.', sender: 'chatbot' }]);
    } else if (userInput === 'The power of now') {
      setMessages((prevMessages) => [...prevMessages, { text:'The book draws from a variety of spiritual traditions,[5] and one reviewer described it as Buddhism mixed with mysticism and a few references to Jesus Christ, a sort of New Age re-working of Zen.[6] It uses these traditions to describe a belief system based on living in the present moment".[7] Its core message is that people s emotional problems are rooted in their identification with their minds.[8] The author writes that an individual should be aware of their present moment instead of losing themselves in worry and anxiety about the past or future.[2] According to the book, only the present moment is real and only the present moment matters,[8][5] and both an individual s past and future are created by their thoughts.[6] The author maintains that people s insistence that they have control of their life is an illusion "that only brings pain".[5] The book also describes methods of relaxation and meditation to help readers anchor themselves in the present.[5] These suggestions include slowing down by avoiding multi-tasking, spending time in nature, and letting go of worries about the future.[9] Some of the concepts contained in The Power of Now, such as the human ego and its negative effects on happiness, are further elaborated in the author s later books, especially A New Earth: Awakening to Your Life s Purpose (2005) ' }]);
    } else if (userInput === 'How can I borrow a book?') {
      setMessages((prevMessages) => [...prevMessages, { text: 'To borrow a book, you can visit our library and fill out a borrowing form.', sender: 'chatbot' }]);
    } else if (userInput === 'HOUSE OF SKY AND BREATH') {
      setMessages((prevMessages) => [...prevMessages, { text: '  House of Sky and Breath (2022) is the sequel to House of Earth and Blood (2020) and the second book in the Crescent City series by Sarah J. Maas. Like its predecessor, House of Sky and Breath is a New York Times bestseller. The book is an urban fantasy, with many elements of high fantasy, such as faeries, magic, and magical objects.', sender: 'chatbot' }]);
    } else {
      setMessages((prevMessages) => [...prevMessages, { text: 'please enter your question.', sender: 'chatbot' }]);
    }
    e.target.reset();
  };

  return (
    <body className='' id='bc' >
    <div className="container" id='c'>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="message-formm" onSubmit={handleMessageSubmit}>
        <input type="textt" name="message" placeholder="Type your message..." autoComplete="off" />
        <button type="submitt">Send</button>
      </form>
    </div>
    </body>
  );
};

export default T;
