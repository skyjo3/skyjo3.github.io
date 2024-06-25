// src/pages/More.js
import React from 'react';
import styles from './More.module.css';

// import Lottie from 'react-lottie';
// import animationData from '../assets/lottie/Animation - 1717195759498.json';

import LazyLoadImage from '../components/LazyLoadImage';
import images from './MoreImages'

const More = () => {

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice' // Supports responsiveness
  //   }
  // };

  return (
    <div className={styles["container"]}>
      <div className={styles["more-background-container"]}>
        <div className={styles["more-container"]}>
          {/*<div className={styles["lottie"]}>
            <Lottie options={defaultOptions} />
          </div>*/}
        
          <div className={styles["image-container"]}>
            {/*<LazyLoadImage src={images.singles.img1.src} alt={images.singles.img1.alt} className={styles.moreImage} />*/}
            <div className={styles["text-overlay"]}>
              <h1>Let's collaborate on fun projects!</h1>
              <p>Please contact me via this email: <br /><a href="mailto:amy.yosue.chen@gmail.com">amy.yosue.chen@gmail.com</a></p>
            </div>
          </div>

          <LazyLoadImage src={images.singles.img2.src} alt={images.singles.img2.alt} className={styles.moreImage} />
          
          <LazyLoadImage src={images.singles.img3.src} alt={images.singles.img3.alt} className={styles.moreImage} />
          
          <LazyLoadImage src={images.singles.img4.src} alt={images.singles.img4.alt} className={styles.moreImage} />
          
        </div>
      </div>
    </div>
  );
};

export default More;
