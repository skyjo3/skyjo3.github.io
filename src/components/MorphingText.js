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
  const texts = ['creativity,', 'quality,', 'and care :)'];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  useEffect(() => {
    setCurrentText(texts[index]);
  }, [index, texts]);

  return (
    <div>
      <p className="landing-paragraph">
        {greeting}
      </p>
      <p className="landing-paragraph">
        I'm a <b>design engineer</b> who lives at the intersection of pixels, code, and agents. I ship products that express <span className="morphing-text">{currentText}</span>
      </p>
    </div>
  );
};

export default MorphingText;
