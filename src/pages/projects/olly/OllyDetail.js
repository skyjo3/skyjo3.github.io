// OllyDetail.js
import React, { useState, useEffect, useRef } from 'react';
import { debounce } from '../../../utils/debounce';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './OllyDetail.module.css';

import LightboxSingle from '../../../components/LightboxSingle';
import CustomSwiper from '../../../components/CustomSwiper';
import Gallery from '../../../components/Gallery';
import LazyLoadImage from '../../../components/LazyLoadImage';

import { CommonNinjaWidget } from 'commonninja-react';

import ProjectBottomCTA from '../../../components/ProjectBottomCTA'

import images from './OllyImages'

const OllyDetail = () => {

  /* Sidebar Navigation */
  const navigate = useNavigate();
  const location = useLocation();
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
    const hash = location.hash.replace('#', '');
    if (hash && sectionRefs.current[hash] && sectionRefs.current[hash].current) {
      sectionRefs.current[hash].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

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

  const handleNavClick = (section) => {
    setActiveSection(section);
    navigate("#" + section);
  };

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
              <li onClick={() => handleNavClick('overview')} className={activeSection === 'overview' ? styles.active : ''}>0 - overview</li>
              <li onClick={() => handleNavClick('research')} className={activeSection === 'research' ? styles.active : ''}>1 - context</li>
              <li onClick={() => handleNavClick('design')} className={activeSection === 'design' ? styles.active : ''}>2 - design</li>
              <li onClick={() => handleNavClick('test')} className={activeSection === 'test' ? styles.active : ''}>3 - documentation</li>
          </ul>
        </div>
        <div className={styles.content}>
          <div className={styles.olly}>
            <section id="overview" ref={sectionRefs.current.overview}>
              <LazyLoadImage src={images.singles.imageProject.src} alt={images.singles.imageProject.alt} className={styles.projectContentImage} onClick={() => openLightbox(images.singles.imageProject.src)} />
              <div className={styles.overviewContainer}>
                <div>
                  <h2>Overview</h2>
                  <p>Olly is a domestic music player that replays songs people have listened to. It occasionally picks a song from the owner’s Last.FM listening history and spins in a speed based on how long ago the song was played. Once the user notices the spinning, they can choose to replay this song by rotating the circular disk. This project’s contribution is to explore how to create a slow expression that invites people to revisit their personal memories through an embodiment of temporal metadata.</p>
                </div>
                <div>
                  <h2>Team</h2>
                  <h6>Project Lead</h6>William Odom, <br />Ron Wakkary
                  <h6>Research Assistant on Paper + LaTex</h6>Amy Yo Sue Chen
                  <h6>Design + Implementation</h6>Jeroen Hol, <br />Bram Naus, <br />Pepijn Verburg
                  <h6>Illustration</h6>Tal Amram
                </div>
              </div>
              <div>
                <h2>Contribution / Impact</h2>
                <ul>
                  <li>One of its research paper has won the <b>Best Paper Award</b> in ACM CHI 2019, the top HCI conference.</li>
                  <li>This work has been recognized and cited by <b>Spotify's research team</b> in their paper, <a href="http://doi.org/10.1145/3313831.3376493">"Giving Voice to Silent Data: Designing with Personal Music Listening History"</a> in ACM CHI 2020.</li>
                  <li>Re-experiencing past music allows users to reflect on life stages, enhancing their appreciation of digital data for personal history and identity.</li>
                  <li>Introducing 'slowness'—delays and reduced control—enriches interactions, suggesting technologies focus on long-term engagement over quick consumption.</li>
                </ul>
              </div>
            </section>
            <section id="research" ref={sectionRefs.current.research}>
                <CustomSwiper images={images.context} />
                <h2>1 - Research Context</h2>
                <div className={styles.researchContainer}>
                  <div>
                    <h3>Problem Statement</h3>
                    <p>The pervasive use of digital technologies often prioritizes efficiency and rapid interaction, leading to shallow engagement with personal data. Also, existing designs generally overlook how technology can facilitate meaningful, long-term experiences with personal digital archives, particularly music history.</p>
                  </div>
                  <div>
                    <h3>Research Goal</h3>
                    <p>This study aims to explore how "slowness" as a design strategy in technology can enhance deep, reflective interaction with personal digital music archives, fostering sustained user engagement and promoting richer, long-term experiences with technology in daily life.</p>
                  </div>
                </div>
                <h4>Research Questions</h4>
                <ul>
                <li>How can experiences of reminiscence and reflection on personal histories of digital music listening be supported through the design of a new kind of music player?</li>
                <li>How might slowness, as a design strategy, enable emergent and ongoing experiences of music listening commensurate with a lifetime of one’s personal history of digital music?</li>
                </ul>
                <div className={styles.skillsContainer}>
                  <div>
                    <h4>research methods</h4>
                    <ul>
                      <li>Semi-structured Interviews</li>
                      <li>Field study</li>
                      <li>Thematic analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4>digital fabrication</h4>
                    <ul>
                      <li>Last.FM data (from Spotify, Tidal, Youtube)</li>
                      <li>wood</li>
                      <li>aluminum</li>
                    </ul>
                  </div>
                </div>
            </section>
            <section id="design" ref={sectionRefs.current.design}>
              <h2>2 - Olly Design</h2>

              {/*Video*/}
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe 
                  src="https://player.vimeo.com/video/130874655?h=f60e1a4d09&byline=0&portrait=0" 
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
              {/*End of Video*/}
              
              <h3>More Images</h3>
              <Gallery images={images.more} rows={4} columns={5} />
            </section>
            <section id="test" ref={sectionRefs.current.test}>
                <h2>3 - Documentation</h2>
                <p>Next, we deployed Olly in <b>3 homes for 15 months </b> to explore how its slow pace might support experi- ences of reflection and reminiscence.</p>
                <p>Findings and more details about participants' precious stories can be found in our paper:</p>
                
                {/* Load CommonNinjaWidget */}
                <CommonNinjaWidget widgetId="b3c8df6a-1324-45b3-8dda-dc2dd545fd65" />
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

export default OllyDetail;
