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
          <TypeIt as={"h1"}
            getBeforeInit={(instance) => {
              instance.type('some stories abuot me').pause(600).delete(6).pause(500).type("out me");
              return instance;
            }}
          />
          <p>Previously, I completed a Ph.D. in Human-Computer Interaction (HCI) at <a href="https://www.sfu.ca/" target="_blank">Simon Fraser University (SFU)</a>, working with <a href="https://www.sfu.ca/siat/people/research-faculty/will-odom.html" target="_blank">William Odom</a> and <a href="http://clab.iat.sfu.ca/people/dr-carman-neustaedter-director/" target="_blank">Carman Neustaedter</a>. My research lies at the intersection of computer science, social science, and interaction design, with a special focus on re-materializing and inter-connecting data to support personal and social reflection. My work critically examines the significance of 'time' in creating a user-centered design that fosters user reminiscence and self-identification. This is achieved by engaging people with their often-overlooked personal data, generated daily and accumulated over the years through their interaction with digital technology. </p>
          <p>Prior to moving to the Canada, I earned my M.Des. in Interaction Design at <a href="https://www.ntust.edu.tw/?Lang=en" target="_blank">National Taiwan University of Science and Technology</a> and a B.S. in Computer Science at <a href="https://nthu-en.site.nthu.edu.tw/" target="_blank">National Tsing Hua University</a>. I worked at two startups, <a href="https://womany.net/about/en" target="_blank">Womany Media Group</a> and <a href="https://www.zuvio.com.tw/" target="_blank">Zuvio Tech Co., Ltd.</a> consecutively as a blended role of Software Engineer, UX Designer/Researcher.</p> 
          <p>I have published my work and got best paper awards at HCI venues such as ACM CHI, DIS and HCI Journal; my designs have also received international design awards including IDA Award and Featured App in Apple App Store. With a hybrid background, I take an interdisciplinary approach combining research methods from social science, arts-and-design, computer engineering, and the humanities to turn large-scale and ambiguous questions into implications that drive change in research products to pursue more diverse and innovative futures.</p>
          <h1>personal values and beliefs </h1>
          <p>I am a Taiwanese American who values curiosity and empathy, emphasizing the importance of genuine conversations free from presumptions. I consciously and actively put diversity, equity and inclusion (DEI) into practice, recognizing that individual differences are just as important as their similarities to us. As an athlete and a passionate explorer, my clarity in life is to continually evolve my perspective by critically engaging with new ideas each day, adapting to this ever-changing world, and creating enduring values that can be preserved for history.</p>
          <p></p>
          <p>Contact email: <br /><a href="mailto:amy.yosue.chen@gmail.com" target="_blank">amy.yosue.chen@gmail.com</a></p>
          
        </div>
      </div>
    </div>
  );
};

export default More;
