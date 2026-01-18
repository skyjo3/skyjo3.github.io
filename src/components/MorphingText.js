import React, { useState, useEffect } from 'react';
import './MorphingText.css';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return 'Good morning! ☀️';
  } else if (hour >= 12 && hour < 17) {
    return 'Good afternoon! ☀️';
  } else {
    return 'Good evening! 🌙';
  }
};

const MorphingText = () => {
  const texts = ['humans', 'aesthetics']; // List of words
  const [currentText, setCurrentText] = useState(texts[0]); // Set initial text
  const [index, setIndex] = useState(0); // Track current index
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    // Set interval to change the text every 2 seconds (2000ms)
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Increment index and loop back
    }, 1000); // Change text every 1 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [texts.length]);

  useEffect(() => {
    // Update the current text based on the index
    setCurrentText(texts[index]);
  }, [index, texts]);

  return (
    <div>
      <p className="landing-paragraph">
      {greeting} 
      </p>
      <p className="landing-paragraph">
        I am a <b>design engineer</b> who codes for <span className="morphing-text">{currentText}</span>.
      </p>
    </div>
  );
};

export default MorphingText;
