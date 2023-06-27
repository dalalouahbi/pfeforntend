


import React, { useState } from 'react';
  import './AboutUs.css'; 
const AboutUs = () => {
  const [showFullText, setShowFullText] = useState(false);
  const handleLearnMore = () => {
    setShowFullText(true);
  };
  return (
    <div className='zed'>
    <div className="about-us-">
      <div className="about-us-content">
        <div className="about-us-text">
          <h2 style={{color:"#00EEFB"}}>About Us</h2>
          {showFullText ? (
            <p className='container' style={{color:"white",fontFamily:"cursive"}}>
Extensive Selection: We take pride in offering one of the largest and most diverse collections of books you'll find online. Our vast inventory
 spans various genres, including fiction, non-fiction, science fiction,fantasy, mystery, romance, biographies, self-help, and many more. With 
  thousands of titles to choose from, you're bound to find your next great 
  read on our website.<br/> Curated Recommendations: Our team of literary experts and avid readers carefully curates book recommendations to help you discover new authors, explore different genres, and find hidden literary gems. Whether you're seeking a thought-provoking classic or the latest bestseller, our handpicked selections will guide you towards exceptional reads that suit your interests and preferences.<br/><br/>
 User-Friendly Experience: We understand the importance of a seamless and enjoyable browsing experience. Our website features a user-friendly interface with intuitive search and filtering options, making it effortless to navigate through our extensive collection. Find books by title, author, genre, or explore our curated lists and featured categories to uncover your next literary adventure.<br/><br/>
High-Quality Editions: We are committed to offering only the highest quality editions of books. We collaborate directly with trusted publishers, ensuring that each book is meticulously crafted and meets the highest standards of printing, binding, and overall production value. When you purchase a book from us, you can expect a durable, beautifully designed edition that will enhance your reading experience.<br/><br/>
Competitive Prices: We believe that exceptional books should be accessible to all readers. That's why we strive to offer competitive prices on our entire collection. From discounted bestsellers to affordable editions of timeless classics, we want to make it easier for you to build your personal library without breaking the bank.<br/><br/>
            </p>
          ) : (
            <p className='container' style={{color:"white"}}>
Extensive Selection: We take pride in offering one of the largest and most diverse collections of books you'll find online. Our vast inventory spans various genres, including fiction, non-fiction, science fiction, fantasy, mystery, romance, biographies, self-help, and many more. With thousands of titles to choose from, you're bound to find your next great read on our website....<br/><br/>
            </p>
          )}
          {!showFullText && (
            <button style={{marginLeft:"10px"}} className="learn-more-btn " onClick={handleLearnMore}>
              Learn More
            </button>
          )}
        </div>
        <div className="about-us-image">
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
