import React, { useState, useEffect } from 'react';
import './MorphingText.css';

const MorphingText = () => {
  const texts = ['visual media', 'photos & video']; // List of words
  const [currentText, setCurrentText] = useState(texts[0]); // Set initial text
  const [index, setIndex] = useState(0); // Track current index

  useEffect(() => {
    // Set interval to change the text every 2 seconds (2000ms)
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Increment index and loop back
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [texts.length]);

  useEffect(() => {
    // Update the current text based on the index
    setCurrentText(texts[index]);
  }, [index, texts]);

  return (
    <p className="landing-paragraph">
      Amy Chen, a <b>Design Researcher</b> focused on <span className="morphing-text">{currentText}</span>.
    </p>
  );
};

export default MorphingText;
