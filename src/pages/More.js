// src/pages/More.js
import React from 'react';
import styles from './More.module.css';

import Lottie from 'react-lottie';
import animationData from '../assets/lottie/Animation - 1717195759498.json';

const More = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' // Supports responsiveness
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["more-background-container"]}>
        <div className={styles["more-container"]}>
          <div className={styles["lottie"]}>
            <Lottie options={defaultOptions} />
          </div>
          <h1>contact</h1>
          <h2><a href="mailto:amy.yosue.chen@gmail.com">amy.yosue.chen@gmail.com</a></h2>
        </div>
      </div>
    </div>
  );
};

export default More;
