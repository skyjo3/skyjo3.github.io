// CrescendoDetail.js
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './CrescendoDetail.module.css';

import LightboxSingle from '../../../components/LightboxSingle';
import CustomSwiper from '../../../components/CustomSwiper';
import Gallery from '../../../components/Gallery';
import LazyLoadImage from '../../../components/LazyLoadImage';

import { CommonNinjaWidget } from 'commonninja-react';

import ProjectBottomCTA from '../../../components/ProjectBottomCTA'

import images from './CrescendoImages'

const CrescendoDetail = () => {

  /* Sidebar Navigation */
  const [activeSection, setActiveSection] = useState('');
  const [loadCommonNinjaWidget, setLoadCommonNinjaWidget] = useState(false);

  const sectionRefs = useRef({
    overview: useRef(null),
    research: useRef(null),
    empathize: useRef(null),
    design: useRef(null),
    test: useRef(null),
    takeaways: useRef(null),
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            if (entry.target.id === 'takeaways') {
              setLoadCommonNinjaWidget(true);
            }
          }
        });
      },
      { rootMargin: '-20% 0px', threshold: 0.1 }  // Trigger when 10% of the element is visible and expand the top margin
    );

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
                <li><a href="#research" className={activeSection === 'research' ? styles.active : ''}>1 - survey</a></li>
                <li><a href="#empathize" className={activeSection === 'empathize' ? styles.active : ''}>2 - design</a></li>
                <li><a href="#design" className={activeSection === 'design' ? styles.active : ''}>3 - user study #1</a></li>
                <li><a href="#test" className={activeSection === 'test' ? styles.active : ''}>4 - user study #2</a></li>
                <li><a href="#takeaways" className={activeSection === 'takeaways' ? styles.active : ''}>5 - reflection</a></li>
            </ul>
        </div>
        <div className={styles.content}>
          <div className={styles.crescendo}>
            <LazyLoadImage src={images.singles.imageProject.src} alt={images.singles.imageProject.alt} className={styles.projectContentImage} onClick={() => openLightbox(images.singles.imageProject.src)} />
            <section id="overview" ref={sectionRefs.current.overview}>
              <div className={styles.overviewContainer}>
                <div>
                  <h2>Overview</h2>
                  <p>Messaging in human communication is not only a carrier of the sender’s intention but also interplay between anticipations on both sides if we see it as an experience-centered design issue. In contrast to using instant messages, we proposed a slow messaging app that progressively reveal messages over a period of time and observe people's reaction to it.</p>
                </div>
                <div>
                  <h2>Team</h2>
                  <h6>Project Lead & Research, Design, Software</h6>Amy Yo Sue Chen
                  <h6>Writing & Design Supervisor</h6>Rung-Huei Liang
                  <h6>Writing & Research Lead</h6>Joe Wen-Chieh Tsai
                  <h6>Data Analysis Assistant</h6>Sheng-Yang Hsu
                </div>
              </div>
              <div>
                <h2>Contribution / Impact</h2>
                <ul>
                  <li>This research found a best level of progression that invites anticipation and curiosity.</li>
                  <li>This messaging way offered a way to increase the quality of intimate communication.</li>
                  <li>This work produced 2 research publications, including one with a <b>best paper award</b>.</li>
                </ul>
              </div>
              <LazyLoadImage src={images.singles.messaging.src} alt={images.singles.messaging.alt} className={styles.contextImage} onClick={() => openLightbox(images.singles.messaging.src)} />
              <h2>Research Context</h2>
              <div className={styles.researchContainer}>
                <div>
                  <h3>Problem Statement</h3>
                  <p>The fast and concise communication enabled by <b>instant messaging</b> has compelled individuals to convey their feelings and thoughts <b>promptly and respond 'in time'</b>, particularly for those communicating across long distances with timezone differences.</p>
                </div>
                <div>
                  <h3>Research Goal</h3>
                  <p>We aim to develop <b>new approaches to experiencing messaging systems</b> that enhance and support people's deep and intimate communication with each other.</p>
                </div>
              </div>
              <div>
                <h3>Qualitative Research Plan</h3>
                <p>To achieve the research goal, we built a qualitative research plan to understand user needs, explore potential design ideas, and evaluate our new messaging design.</p>
                <p>The whole plan can be broken down into 5 parts:</p>
                <LazyLoadImage src={images.singles.imagePlan.src} alt={images.singles.imagePlan.alt} className={styles.planImage} onClick={() => openLightbox(images.singles.imagePlan.src)} />
              </div>
              <div className={styles.skillsContainer}>
                <div>
                  <h4>research methods</h4>
                  <ul>
                    <li>Survey / interview</li>
                    <li>User testing / log analysis</li>
                    <li>Inferential statistics / t-test</li>
                  </ul>
                </div>
                <div>
                  <h4>design tools</h4>
                  <ul>
                    <li>Sketch prototyping</li>
                    <li>Zeplin</li>
                    <li>Adobe Suite</li>
                  </ul>
                </div>
                <div>
                  <h4>software engineering</h4>
                  <ul>
                    <li>iOS dev (Obj-C/Swift)</li>
                    <li>Automation Scripts in Adobe Suite</li>
                  </ul>
                </div>
              </div>
            </section>
            <section id="research" ref={sectionRefs.current.research}>
              <CustomSwiper images={images.context} />
              <h2>1 - Survey for People's Interest in Slow Messaging</h2>

            </section>
            <section id="empathize" ref={sectionRefs.current.empathize}>
                <LazyLoadImage src={images.singles.imageInquiry.src} alt={images.singles.imageInquiry.alt} className={styles.focusGroupImage} onClick={() => openLightbox(images.singles.imageInquiry.src)} />
                <h2>2 - Contextual Inquiry</h2>
                <p>To understand the user needs, I conducted a <b>contextual inquiry</b> at 5 participants' houses to observe and learn their photographic practices. Through word of mouth and online advertisement, I recruited participants who regularly take and view photos, and have at least 1,800 photos in their archives.</p>
                
                <div className={styles.miroContainer}>
                  <LazyLoadImage src={images.singles.imageMiro.src} alt={images.singles.imageMiro.alt} className={styles.miroImage} onClick={() => openLightbox(images.singles.imageMiro.src)} />
                  <div>
                    <p>After analyzing the data on a <b>Miro</b> board, we gained the results that: </p>
                    <ul>
                      <li>There are a <b>lack of motivation to organize or revisit</b> digital photos due to <b>the sheer size</b> of them, and</li>
                      <li>a <b>lack of awareness</b> around the precise <b>contents in the deep past</b> of their growing photos.</li>  
                    </ul>
                  </div>
                </div>
                <p>Based on the results, we created our design goals:</p>
                <ul>
                  <li>to increase people’s <b>awareness</b> and <b>access</b> of digital photos</li>
                  <li>to support different ways of <b>sorting</b> and <b>visualizing</b> digital photos</li>
                </ul>
            </section>
            <section id="design" ref={sectionRefs.current.design}>
                <h2>3 - Design Process</h2>
                <p>To support people to regain a sense of scale and content of their digital photos, our team kickstarted an iterative design process that includes: ideation, prototyping, and digital fabrication.</p>
                <h3>Ideation</h3>
                <h5>(1) a tangible artifact at home</h5>
                <p>After understanding the existing photo viewing platforms and devices, I initiated several rounds of sketching. At the end, we decided to create <b>a tangible photo viewer</b> that allows people to explore their memories <b>at home</b> for intimacy, access, and ease.</p>
                <h5>(2) a way to reorganize photos via timestamps</h5>
                <p>Also, learning the value of <b>using timestamps as design materials</b> from existing HCI design works, we decided to enable our tangible photo viewer to sort photos based on:</p>
                  <ol>
                    <li><b>chronological order</b>,</li>
                    <li><b>dates</b>, regardless of the year they were taken,</li>
                    <li><b>times of day</b>, regardless of the date or year they were taken.</li>
                  </ol>
                <h5>(3) a scope-like form</h5>
                <LazyLoadImage src={images.singles.form.src} alt={images.singles.form.alt} className={styles.formImage} onClick={() => openLightbox(images.singles.form.src)} />
                <p>Giving an appropriate physical form to Chronoscope pushed us to critically consider the aesthetics, material presence, and holistic integration of design elements. Our process was highly inspired by <b>scope-like forms</b> which not only suggest <b>rotation-based tangible interaction</b> but also invite users to <b>view and contemplate</b> the viewed phenomena in an intentional, inquisitive way.</p>
                <h3>Prototyping</h3>
                <h5>Phase 1 — Sketching</h5>
                <p>Next, I started by collecting numerous <b>scope-form images on Pinterest</b> and created an <b>inspiration wall</b> in our design studio. More detailed sketching and ideas were produced in this phase as well.</p>
                <CustomSwiper images={images.ideation} />
                <h5>Phase 2 — Programming</h5>
                <p>Later I turned the paper wireframes into live prototypes on an <b>iOS app</b>. I thought about using Figma, but the experience would just be very limited since it would not be using my real digital photos. The <b>Objective-C</b> codes were later translated into <b>Python</b> scripts, executed by a <b>Raspberry Pi</b> board.</p>
                <p>The Python script that securely requests, downloads, processes, and integrates user’s digital photo archive (either <b>Google Photos or Dropbox</b>). It synchronizes photos over time.</p>
                <CustomSwiper images={images.prototype} />
                <h5>Phase 3 — Fabricating</h5>
                <p>While developing the software, I collaborated with our 3d designer and digital fabrication expert on the actual <b>3D-printed parts</b> and where <b>each embeded electronic component</b> should be tightly stored.</p>
                <LazyLoadImage src={images.singles.e1.src} alt={images.singles.e1.alt} className={styles.formImage} onClick={() => openLightbox(images.singles.e1.src)} />
                <LazyLoadImage src={images.singles.e2.src} alt={images.singles.e2.alt} className={styles.formImage} onClick={() => openLightbox(images.singles.e2.src)} />
                <p>A silicone eyepiece with magnification lens is affixed to the 240x240 color display. Raspberry Pi Zero W is integrated under a rotary switch (for timeframe mode selection) and a potentiometer (for granularity selection); these components lead into a continuous rotary encoder that is integrated into a driveshaft (for photo viewing selection); a cylindical lithium ion battery, Powerboost 1000 charger, and latching pushbutton (for powering on and of) conclude the electronics implementation. The enclosure is fabricated from 3D printed Resin with the viewing direction rotational surface encased in silicone.</p>
                <LazyLoadImage src={images.singles.e3.src} alt={images.singles.e3.alt} className={styles.formImage} onClick={() => openLightbox(images.singles.e3.src)} />
                <Gallery images={images.electronics} rows={2} columns={4} />
                <h3>Final Design</h3>
                <p>The final Chronoscope design enables users to explore and interact with their photo archive through 3 rotational controls:</p>
                <ol>
                  <li><b>Main Wheel:</b> The scope’s main feature is a rotating wheel that controls the viewing direction, navigating either forward or backward in time within the selected timeframe mode (either <b>clockwise</b> to move forward in time, or <b>counterclockwise</b> to move backward).</li>
                  <li><b>Big Knob:</b> When switching the bigger knob, users toggle between <b>3 different timeframe modes</b> (Linear, Date, Time), each offering a temporal organization of their archive.</li>
                  <li><b>Small Knob:</b> To ‘speed up’ or ‘slow down’ the amount of photos that are cycled through in one rotation when viewing photos, the user can adjust the smaller knob to <b>‘tune’ the granularity</b>.</li>
                </ol>
                <LazyLoadImage src={images.singles.design.src} alt={images.singles.design.alt} className={styles.fieldStudyImage} onClick={() => openLightbox(images.singles.design.src)} />
                <p>Here are the examples of using Chronoscope. Click on the images to enter full screen.</p>
                <CustomSwiper images={images.design} />
                <iframe width="100%" height="480" src="https://www.youtube.com/embed/oG2IDyQWvLU?si=v3NXWSFP9eSACLQm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </section>
            <section id="test" ref={sectionRefs.current.test}>
                <h2>4 - Field Study</h2>
                <p>We recruited <b>4 participants</b> for <b>3 months</b> in Vancouver through word of mouth and online advertisements. In the initial interviews, we offered a demo of Chronoscope and provided a pamphlet explaining how it works. After the initial visit, we conducted bi-weekly interviews to check in with participants.</p>
                <p>The final <b>in-depth interviews</b> lasted for approximately 2 hours. Two researchers attended and took field notes in each interview. Qualitative data were collected and transcribed with the support of Otter.ai. Data analysis was performed using an <b>affinity diagram</b> and <b>thematic analysis</b> on Miro.</p>
                <p>.</p>
                <LazyLoadImage src={images.singles.form.src} alt={images.singles.form.alt} className={styles.fieldStudyImage} onClick={() => openLightbox(images.singles.form.src)} />
                <h3>Findings</h3>
                <p>Our findings showed that Chronoscope resurfaced <b>forgotten or unknown life patterns</b>, especially those in <b>less familiar modes</b>, such as Date and Time. Because it is not easy to anticipate what photos would be interconnected in those two modes. People can revisit, associate, and reflect on multiple surprising moments at once in their exploration journey, <b>triggering a provocative way of integrating and interpreting autobiographical memories</b>.</p>
                <h3>More details can be found below:</h3> 
                <p>1. Audio-distorted video presentation of this work in CHI2023:</p>                
                {/* Presentation Slides? */}
                <iframe width="100%" height="480" src="https://www.youtube.com/embed/KO5jsBgDPtk?si=l5FOcVnGmBHX80zh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p>2. Research publications:</p>
                {/* Conditionally load CommonNinjaWidget */}
                {loadCommonNinjaWidget && (
                  <CommonNinjaWidget widgetId="65a1eb65-1593-4968-be59-7e52f7b54060" />
                )}
            </section>
            <section id="takeaways" ref={sectionRefs.current.takeaways}>
                <h2>5 - Reflection on Challenges and Opportunities</h2>
                <p>Looking back, the most challenging part at the beginning is to <b>interconnect people's various past photo memories and present them in a meaning form</b>. However, with the support of timestamps, we were able to figure out a way to propose innovative ways of reorganizing photos.</p> 
                <p>Moreover, the fact that Chronoscope updates photos over time created an ongoing accumulated quality that increases people's <b>sense of ownership</b> and offers <b>agency</b> over their photo archives. It is what prompted prospective refections on the potential longer-term place that Chronoscope could occupy in their own lives and potentially scaling beyond it to future generations.</p>
                <div>
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

export default CrescendoDetail;
