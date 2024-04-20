import React, { useState } from 'react';
import './HelloButton.css'; // Import CSS for styling



function HelloButton() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <>
    <div>
      <div className='d1'>
        <header className="header">
          <nav className="navbar">
            <div className="container">
              <h1 className="logo">My ReactJS</h1>
              <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>
        
      </div>
      <div className='d2'>
      <div className="hello-button-container">
          <h2 className="heading">Welcome to My ReactJS Project</h2>
          <button className="hello-button" onClick={handleClick}>
            Click me
          </button>
          <h2><p className="click-count">Number of clicks: {clickCount}</p></h2>
        </div>
      </div>
      </div>
    </>
  );
}

export default HelloButton;
