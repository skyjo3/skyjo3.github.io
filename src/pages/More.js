// src/pages/More.js
import React from 'react';
import styles from './More.module.css';

// import Lottie from 'react-lottie';
// import animationData from '../assets/lottie/Animation - 1717195759498.json';

import TypeIt from 'typeit-react';
import ScrollTypingText from '../components/ScrollTypingText';
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
            <div className={styles["text-overlay"]}>
              {/*<h1>Let's collaborate on fun projects!</h1>*/}
              <TypeIt as={"h1"}
                getBeforeInit={(instance) => {
                  instance.type('Let\'s do some cool projcets!').pause(750).delete(5).pause(500).type("ects !! ");
                  return instance;
                }}
              />
              <p>Please contact me via this email: <br /><a href="mailto:amy.yosue.chen@gmail.com">amy.yosue.chen@gmail.com</a></p>
            </div>
          </div>

          {/*<ScrollTypingText src={images.singles.img2.src} alt={images.singles.img2.alt} text="Why not pitch your ideas and hit some homeruns?" />
          <ScrollTypingText src={images.singles.img3.src} alt={images.singles.img3.alt} text="Contact me to start something amazing." />*/}
          
        </div>
      </div>
    </div>
  );
};

export default More;
