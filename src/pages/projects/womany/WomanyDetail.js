// WomanyDetail.js
import React, { useState, useEffect, useRef } from 'react';
import { debounce } from '../../../utils/debounce';
import { useHistory } from 'react-router-dom';
import styles from './WomanyDetail.module.css';

import LightboxSingle from '../../../components/LightboxSingle';
import CustomSwiper from '../../../components/CustomSwiper';
import Gallery from '../../../components/Gallery';
import LazyLoadImage from '../../../components/LazyLoadImage';

import ProjectBottomCTA from '../../../components/ProjectBottomCTA'

import images from './WomanyImages'

const WomanyDetail = () => {

  /* Sidebar Navigation */
  const [activeSection, setActiveSection] = useState('');

  const sectionRefs = useRef({
    overview: useRef(null),
    research: useRef(null),
    empathize: useRef(null),
    design: useRef(null),
    test: useRef(null),
    takeaways: useRef(null),
  });

  useEffect(() => {
    const debounceObserverCallback = debounce((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, 300); // Debounce delay of 300 milliseconds

    const observer = new IntersectionObserver(debounceObserverCallback, {
      rootMargin: '-20% 0px',
      threshold: 0.1
    });

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      observer.disconnect(); // Cleanup the observer
    };
  }, []);

  /* LightboxSingle */
  const [selectedImage, setSelectedImage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      {/* CTA fade in at page end */}
      <ProjectBottomCTA />
      <div className={styles.projectContainer}>
        <div className={styles.sidebar}>
            <ul>
                <li><a href="#overview" className={activeSection === 'overview' ? styles.active : ''}>0 - overview</a></li>
                <li><a href="#research" className={activeSection === 'research' ? styles.active : ''}>1 - background</a></li>
                <li><a href="#empathize" className={activeSection === 'empathize' ? styles.active : ''}>2 - learn + focus</a></li>
                <li><a href="#design" className={activeSection === 'design' ? styles.active : ''}>3 - design</a></li>
                <li><a href="#test" className={activeSection === 'test' ? styles.active : ''}>4 - analytics</a></li>
                <li><a href="#takeaways" className={activeSection === 'takeaways' ? styles.active : ''}>5 - review</a></li>
            </ul>
        </div>
        <div className={styles.content}>
          <div className={styles.womany}>
            <LazyLoadImage src={images.singles.imageProject.src} alt={images.singles.imageProject.alt} className={styles.projectContentImage} onClick={() => openLightbox(images.singles.imageProject.src)} />
            <section id="overview" ref={sectionRefs.current.overview}>
              <div className={styles.overviewContainer}>
                <div>
                  <h2>Overview</h2>
                  <p>As an advocate for gender equity, I worked at Womany Media Group, one of the leading Asian companies that advocates for gender equality and promotes diversity and inclusion. My contribution in this project are to redesigning their mobile reading app, developing the app, and creating customized reading experiences for individuals interested in feminism-oriented articles and news.</p>
                </div>
                <div></div>
              </div>
              <h2>Team</h2>
              <div className={styles.teamContainer}>
                <div>
                  <h6>iOS Engineer, User Research, Design Ideation</h6>Amy Yo Sue Chen
                  <h6>UX Design, User Research</h6>Merci Kuo, Anu
                  <h6>Mobile Dev Lead + Android Dev</h6>Dan Chen
                  <h6>Back-End Engineer</h6>Jerry Lee
                </div>
                <div>
                  <h6>Founders</h6>Wei-Shuan Chang, Tanya Chen
                  <h6>User Research</h6>Lin Yen
                  <h6>UX Writer / Content</h6>Audrey Ko, Lisa Liu
                  <h6>Front-End Engineer</h6>Irvin Chen
                </div>
              </div>
              <div>
                <h2>Contribution / Impact</h2>
                <ul>
                  <li>This iOS app received the recognition of Best App of the Day on App Store in 2018.</li>
                  <li>Its Android version was awarded as App with the Best Potential in 2017.</li>
                  <li>One month after launch, 
                    <ul>
                      <li>The redesigned app achieved a user growth index (UGI) of 59.02%.</li>
                      <li>The user engagement duration increased by 25.84%.</li>
                      <li>The page view grew by 94.17%.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>
            <section id="research" ref={sectionRefs.current.research}>
                <LazyLoadImage src={images.singles.imageContext.src} alt={images.singles.imageContext.alt} className={styles.contextImage} onClick={() => openLightbox(images.singles.imageContext.src)} />
                <p>"Womany Media Group is one of the most prestigious and gender-friendly media community in Asia. Our collective services have reached over 60 million global readers, aiming to empower women and diverse groups such as LGBTQI+ via digital content, offline events, products, and courses." — Womany Website https://womany.net/about/en</p>
                <h2>1 - Original App Design</h2>
                <div className={styles.researchContainer}>
                  <div>
                    <h3>Problem Statement</h3>
                    <p>The original Womany app, W ReadBar, while aesthetic and simple, only allowed users to read 5 randomly selected articles during each session. Therefore, the <b>engagement time is relatively short</b>.</p>
                  </div>
                  <div>
                    <h3>Research Goal</h3>
                    <p>To enhance user engagement and tailor the reading experience, our objective is to identify the most popular topics and explore how a mobile reading app can <b>create a warm and welcoming environment</b> that encourages users to enjoy a <b>more immersive article reading experience</b> on the app platform.</p>
                  </div>
                </div>
                <div>
                  <h3>How Research Changed the Design Direction</h3>
                  <p>This research has significantly influenced our design direction, informed by insights shared by participants. It has uncovered evidence that supports design guidelines aimed at addressing broader user needs and enhancing the reading experience by making it continuous, generative, inviting, and conducive to advancing knowledge acquisition to the next level.</p>
                </div>
                <div className={styles.skillsContainer}>
                  <div>
                    <h4>research methods</h4>
                    <ul>
                      <li>Competitive audit / SWOT analysis</li>
                      <li>Google analytics / Log analysis</li>
                      <li>Survey / Semi-structured interview</li>
                      <li>Thematic analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4>design tools</h4>
                    <ul>
                      <li>Sketching</li>
                      <li>Sketch/Zeplin</li>
                      <li>Adobe Suite</li>
                    </ul>
                  </div>
                  <div>
                    <h4>app development</h4>
                    <ul>
                      <li>iOS (Obj-C/Swift)</li>
                      <li>Android (Java)</li>
                    </ul>
                  </div>
                </div>
                <LazyLoadImage src={images.singles.imagePlan.src} alt={images.singles.imagePlan.alt} className={styles.planImage} onClick={() => openLightbox(images.singles.imagePlan.src)} />
            </section>
            <section id="empathize" ref={sectionRefs.current.empathize}>
                <h2>2 - Learn + Focus</h2>
                <p>To begin with, we conducted a competitive audit and a SWOT analysis to distill our design focus.</p>
                <h3>(1) Competitive Audit</h3>
                <p>To grasp the wider spectrum of user needs and formulate a redesign strategy, I conducted a competitive audit on 5 competitors, analyzing their website descriptions and public reviews. I compiled tables outlining their <b>product features, target audience, utilized technologies, and value propositions</b>.</p>
                <p>Findings revealed that these competitors provided <b>increased interactivity</b> through app features, and offered <b>personalized content</b> within their membership programs.</p>
                <LazyLoadImage src={images.singles.imageFocusGroup.src} alt={images.singles.imageFocusGroup.alt} className={styles.focusGroupImage} onClick={() => openLightbox(images.singles.imageFocusGroup.src)} />
                <h3>(2) SWOT Analysis</h3>
                <h4>Keep Our Strengths; Learn from Weaknesses.</h4>
                <p>In addition, I conducted a SWOT analysis on our old app design to determine which design features to retain and which ones to redesign. Building on insights from past reader reviews and the competitive audit, we decided to <b>keep the swipe-based, seamless in-article reading experience that bring people a warm and accepted feeling</b>.</p>
                <p>We decided to focus on 2 new directions: </p>
                <ol>
                  <li><b>personalized reading feeds</b>, and </li>
                  <li><b>data visualization of personal growth</b>.</li>
                </ol>
                <LazyLoadImage src={images.singles.imageMiro.src} alt={images.singles.imageMiro.alt} className={styles.miroImage} onClick={() => openLightbox(images.singles.imageMiro.src)} />
            </section>
            <section id="design" ref={sectionRefs.current.design}>
                <h2>3 - Proposed Design</h2>
                <p>After the brainstorming session, there are 5 things to highlight in the redesigned Womany app:</p>
                <ol>
                  <li>a warm voice in a <b>dialogical login</b> window,</li>
                  <li>an <b>free-form landing page</b> that allows its user to explore by swiping to four directions,</li>
                  <li>a customized article feed that caters to its user's interests,</li>
                  <li>Lottie-powered <b>animation cards</b> that provide insightful quotes, and</li>
                  <li>a data visualization page of user's reading patterns.</li>
                </ol>
                <CustomSwiper images={images.design} />
                <iframe width="100%" height="480" src="https://www.youtube.com/embed/hgSSLGDV6NY?si=311drcMQTCmhhRuE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </section>
            <section id="test" ref={sectionRefs.current.test}>
                <h2>4 - Statistics – Increased User Growth and Engagement</h2>
                <p>Findings show that the redesigned Womany App engaged people in reading their customized articles.</p>
                <p>One month after launch, the redesigned app achieved a <b>user growth index (UGI) of 59.02%</b>, increased the <b>user engagement duration by 25.84%</b>, and boosted the <b>page view rate by 94.17%</b>.</p>
                <LazyLoadImage src={images.singles.imageFieldStudy.src} alt={images.singles.imageFieldStudy.alt} className={styles.fieldStudyImage} onClick={() => openLightbox(images.singles.imageFieldStudy.src)} />
                <h3>Media Highlights and Recommendations</h3>
                <p>There are numerous exposures and recommendations on local news, social media, and YouTube. Below are some examples in Mandarin:</p>
                <Gallery images={images.media} rows={1} columns={4} />
            </section>
            <section id="takeaways" ref={sectionRefs.current.takeaways}>
                <h2>5 - Project Review – pros and cons.</h2>
                <p>While the redesigned app is undoubtedly a success and a pleasure to use, I found that the development process took significantly longer than anticipated. The decision to design the homepage with multiple access points to other pages through swiping extended the development time by at least a week, potentially impacting the app's stability. To mitigate this, we integrated <b>Google Analytics and Crashlytics</b> to track crash reports and analyze user behavior data effectively.</p>
                <p>From this project, I learned the critical importance of conducting thorough research before initiating the design phase. <b>Without the competitive audit and SWOT analysis, we might not have approached the project with such logical thinking and strategic planning.</b> These preparatory steps provided crucial insights that informed our design decisions, ensuring that the app not only met but exceeded user expectations. Moving forward, this experience has underscored the value of balancing innovative design with practical development strategies to enhance both user engagement and overall app performance.</p>
                <div>
                  <h3>Recognition</h3>
                  <p>There are significant impact on user engagement and the app's recognition, with: </p>
                  <ul>
                    <li>the iOS version being named Best App of the Day on the App Store in 2018, and </li>
                    <li>the Android version awarded as the App with the Best Potential in 2017.</li>
                  </ul>
                  <h3>More Images</h3>
                  <Gallery images={images.more} rows={2} columns={5} />
                </div>
            </section>

            {/* Lightbox modal */}
            <LightboxSingle
              src={selectedImage}
              alt="Enlarged View"
              isOpen={isOpen}
              onClose={closeLightbox}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomanyDetail;
