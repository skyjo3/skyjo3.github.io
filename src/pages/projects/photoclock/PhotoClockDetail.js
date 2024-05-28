// PhotoClockDetail.js
import React, { useState, useEffect, useRef } from 'react';
import styles from './PhotoClockDetail.module.css';

import LightboxSingle from '../../../components/LightboxSingle';
import CustomSwiper from '../../../components/CustomSwiper';
import Gallery from '../../../components/Gallery';
import LazyLoadImage from '../../../components/LazyLoadImage';

import { ElfsightWidget } from 'react-elfsight-widget';
import { CommonNinjaWidget } from 'commonninja-react';

import FullScreenCTA from '../../../components/FullScreenCTA'

import images from './PhotoClockImages'

const PhotoClockDetail = () => {

  /* Sidebar Navigation */
  const [activeSection, setActiveSection] = useState('');
  const [loadElfsightWidget, setLoadElfsightWidget] = useState(false);
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
            if (entry.target.id === 'test') {
              setLoadElfsightWidget(true);
            } else if (entry.target.id === 'takeaways') {
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
      <FullScreenCTA />
      <div className={styles.projectContainer}>
        <div className={styles.sidebar}>
            <ul>
                <li><a href="#overview" className={activeSection === 'overview' ? styles.active : ''}>0 - overview</a></li>
                <li><a href="#research" className={activeSection === 'research' ? styles.active : ''}>1 - research</a></li>
                <li><a href="#empathize" className={activeSection === 'empathize' ? styles.active : ''}>2 - empathize</a></li>
                <li><a href="#design" className={activeSection === 'design' ? styles.active : ''}>3 - design</a></li>
                <li><a href="#test" className={activeSection === 'test' ? styles.active : ''}>4 - test</a></li>
                <li><a href="#takeaways" className={activeSection === 'takeaways' ? styles.active : ''}>5 - takeaways</a></li>
            </ul>
        </div>
        <div className={styles.content}>
            <LazyLoadImage src={images.singles.imageProject.src} alt={images.singles.imageProject.alt} className={styles.projectContentImage} onClick={() => openLightbox(images.singles.imageProject.src)} />
            <section id="overview" ref={sectionRefs.current.overview}>
              <div className={styles.overviewContainer}>
                <div>
                  <h2>Overview</h2>
                  <p>PhotoClock is an iOS mobile app that enables people to revisit their photos previously taken at the same ‘clock time’ of the present moment. Following the ongoing flow of time, users perceive different memories in a dynamic manner. This project specifically provoke a question of when people would like their memories to re-emerge and how memories could be interconnected to enrich personal reflection.</p>
                </div>
                <div>
                  <h2>Team</h2>
                  <h6>Project Lead, Design Researcher, Engineer</h6>Amy Yo Sue Chen
                  <h6>Writing & Design Supervisor</h6>William Odom
                  <h6>Writing Supervisor</h6>Carman Neustaedter
                  <h6>Data Analysis Assistant</h6>Sol Kang
                </div>
              </div>
              <div>
                <h2>Contribution / Impact</h2>
                <ul>
                  <li>This project discovered a strategy to use 'clock time' as a design material to reorganize photos.</li>
                  <li>We created an innovative way to view photos and to trigger people's memories more naturally.</li>
                  <li>3 research publications in top-tier HCI conferences (ACM CHI + DIS)</li>
                </ul>
              </div>
            </section>
            <section id="research" ref={sectionRefs.current.research}>
                <LazyLoadImage src={images.singles.imageContext.src} alt={images.singles.imageContext.alt} className={styles.contextImage} onClick={() => openLightbox(images.singles.imageContext.src)} />
                <h2>1 - Research Context</h2>
                <div className={styles.researchContainer}>
                  <div>
                    <h3>Problem Statement</h3>
                    <p>The adoption of smartphones and low-cost cloud storage over the past decade has catalyzed a hyper-accelerated growth of personal photo archives. <b>As digital photos grow</b>, it becomes more <b>difficult for people to notice and engage</b> with their archive as an everyday resource.</p>
                  </div>
                  <div>
                    <h3>Research Goal</h3>
                    <p>We aim to explore the <b>factors and methods</b> that <b>evoke feelings of nostalgia, fulfillment, and significance</b> in individuals when they engage with photos. By gaining insights into the user needs, our objective is to introduce <b>innovative photo viewing approaches</b>.</p>
                  </div>
                </div>
                <div>
                  <h3>Question + Plan</h3>
                  <p><i>How to make digital photo more present, dynamic, and interactive to support more situated and reflective photo viewing experiences?</i></p>
                  <p>To answer this question, we built a qualitative research plan to understand user needs and explore potential design materials. Based on the research results, we kick started the PhotoClock design process.</p>
                </div>
                <div className={styles.skillsContainer}>
                  <div>
                    <h4>research methods</h4>
                    <ul>
                      <li>Focus group</li>
                      <li>Field study</li>
                      <li>Interview</li>
                    </ul>
                  </div>
                  <div>
                    <h4>design tools</h4>
                    <ul>
                      <li>Miro brainstorming</li>
                      <li>Figma prototyping</li>
                      <li>Adobe Suite</li>
                    </ul>
                  </div>
                  <div>
                    <h4>documentation</h4>
                    <ul>
                      <li>Google Suite</li>
                      <li>Otter.ai</li>
                      <li>Microsoft Word / LaTeX</li>
                    </ul>
                  </div>
                </div>
                <LazyLoadImage src={images.singles.imagePlan.src} alt={images.singles.imagePlan.alt} className={styles.planImage} onClick={() => openLightbox(images.singles.imagePlan.src)} />
            </section>
            <section id="empathize" ref={sectionRefs.current.empathize}>
                <LazyLoadImage src={images.singles.imageFocusGroup.src} alt={images.singles.imageFocusGroup.alt} className={styles.focusGroupImage} onClick={() => openLightbox(images.singles.imageFocusGroup.src)} />
                <h2>2 - Empathize</h2>
                <p>To understand the user needs, we conducted an <b>online focus group</b> on Zoom with 5 participants. We invited participants to generate insights through co-creating answers to questions in a <b>Figma</b> board.</p>
                <p>The results show that: </p>
                <ul>
                  <li>The conventional chronological photo viewing with <b>gallery view</b> does not present <b>memories associated with the present self</b>, so this form of viewing does not trigger memories deeply.</li>
                  <li>People desire new approaches to revisit their photo memories on <b>mobile phones</b>.</li>
                </ul>
                <div className={styles.miroContainer}>
                  <LazyLoadImage src={images.singles.imageMiro.src} alt={images.singles.imageMiro.alt} className={styles.miroImage} onClick={() => openLightbox(images.singles.imageMiro.src)} />
                  <div>
                    <p>After analyzing the data on a <b>Miro</b> board, our results show that people care the most about <b>the why and when </b>they are browsing their photos.</p>
                    <p>Thus, our research team decided to make use of the <b>timestamp of when each photo was taken</b>.</p>
                  </div>
                </div>
            </section>
            <section id="design" ref={sectionRefs.current.design}>
                <h2>3 - Proposed Design</h2>
                <p>To invite people to sense the passage of time and reflect on their life history, we chose <b>'clock time'</b> as a criterion for photos to regain visibility. We proposed a photo viewing app that only prompts photos taken around the 'current clock time'. The photos transition in a real-time flow.</p>
                <CustomSwiper images={images.design} />
                <iframe width="100%" height="480" src="https://www.youtube.com/embed/sNrT14OwCvA?si=ArwsHBIzFc1IFsBJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </section>
            <section id="test" ref={sectionRefs.current.test}>
                <h2>4 - Online Field Study</h2>
                <p>PhotoClock was deployed to <b>12 participants</b>' phones via Apple Testflight in North America for <b>8 weeks</b>. Participants were encouraged to share the screenshots and use scenarios of their PhotoClock app. Post-deployment <b>interviews</b> were conducted one-on-one, lasting for 1 hour on Zoom.</p>
                <p>Qualitative data were collected and transcribed with the support of Otter.ai. Data analysis was performed using an <b>affinity diagram</b> and <b>thematic analysis</b>.</p>
                <LazyLoadImage src={images.singles.imageFieldStudy.src} alt={images.singles.imageFieldStudy.alt} className={styles.fieldStudyImage} onClick={() => openLightbox(images.singles.imageFieldStudy.src)} />
                <p>Hear the AI-distorted voices from our field study's participants:</p>
                
                {/* Conditionally load ElfsightWidget */}
                {loadElfsightWidget && (
                  <ElfsightWidget widgetID="127867e4-882f-4838-98c1-a8a562a84e29" />
                )}
            </section>
            <section id="takeaways" ref={sectionRefs.current.takeaways}>
                <h2>5 - Takeaways – Less, again, is more.</h2>
                <p>Findings show that PhotoClock engaged people in exploring their photo memories with <b>a natural, dynamic 'flow'</b>. This kind of flow-based interaction design strengthened people's connection with their precious past. Our findings also reveal that providing <b>minimal controls</b> in digital photo viewing system can better support people to recall memories and reflect on life history <b>more consciously and naturally</b>.</p>
                <div>
                  <h3>REFLECTION: How Research Changed the Design Direction</h3>
                  <p>This research has significantly influenced the design direction by leveraging insights from participants. It has yielded evidence regarding potential new design elements for systems that facilitate the coexistence of individuals with their ever-expanding digital data and possessions.</p>
                  <p>Learn more participants' stories and experiences here:</p>
                  
                  {/* Conditionally load CommonNinjaWidget */}
                  {loadCommonNinjaWidget && (
                    <CommonNinjaWidget widgetId="4059adb6-9433-48d1-a294-3bc3de43b15f" />
                  )}
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
  );
};

export default PhotoClockDetail;
