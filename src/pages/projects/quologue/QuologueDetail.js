// QuologueDetail.js
import React, { useState, useEffect, useRef } from 'react';
import { debounce } from '../../../utils/debounce';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './QuologueDetail.module.css';

import LightboxSingle from '../../../components/LightboxSingle';
import CustomSwiper from '../../../components/CustomSwiper';
import Gallery from '../../../components/Gallery';
import LazyLoadImage from '../../../components/LazyLoadImage';

import ProjectBottomCTA from '../../../components/ProjectBottomCTA'

import images from './QuologueImages'

const QuologueDetail = () => {

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
              <li onClick={() => handleNavClick('empathize')} className={activeSection === 'empathize' ? styles.active : ''}>2 - interview</li>
              <li onClick={() => handleNavClick('design')} className={activeSection === 'design' ? styles.active : ''}>3 - design + dev</li>
              <li onClick={() => handleNavClick('test')} className={activeSection === 'test' ? styles.active : ''}>4 - field study</li>
              <li onClick={() => handleNavClick('takeaways')} className={activeSection === 'takeaways' ? styles.active : ''}>5 - reflection</li>
          </ul>
        </div>
        <div className={styles.content}>
          <div className={styles.quologue}>
            <section id="overview" ref={sectionRefs.current.overview}>
              <LazyLoadImage src={images.singles.imageProject.src} alt={images.singles.imageProject.alt} className={styles.projectContentImage} onClick={() => openLightbox(images.singles.imageProject.src)} />
              <div className={styles.overviewContainer}>
                <div>
                  <h2>Overview</h2>
                  <p>Quologue is an Generative AI-empowered website that allows people to rediscover and interact with their e-book highlights. Offering thought-provoking prompts tailored to individual knowledge preferences, users reconnect with significant content, documenting reflections to advance their understanding.</p>
                </div>
                <div>
                  <h2>Team</h2>
                  <h6>Lead Software Engineer & Design Research Mentor</h6>Amy Yo Sue Chen
                  <h6>Project Lead, Ideation, Design, Research‍</h6>Sol Kang
                  <h6>Design & Research Supervisor</h6>William Odom
                  <h6>Software Engineering</h6>Vlad Vakulenko
                </div>
              </div>
              <div>
                <h2>Contribution / Impact</h2>
                <ul>
                  <li>This project leverages AI to elevate digital reading, transforming passive consumption into a dynamic, conversational experience that enhances understanding and expands perspectives.</li>
                  {/*<li></li>*/}
                </ul>
              </div>
            </section>
            <section id="research" ref={sectionRefs.current.research}>
                <LazyLoadImage src={images.singles.imageContext.src} alt={images.singles.imageContext.alt} className={styles.contextImage} onClick={() => openLightbox(images.singles.imageContext.src)} />
                <h2>1 - Research Context</h2>
                <div className={styles.researchContainer}>
                  <div>
                    <h3>Problem Statement</h3>
                    <p>In today's digital landscape, <b>eBooks provide vast information but often lead to passive consumption</b>. There is a pressing need for a platform that not only facilitates access to digital content but also promotes active engagement and reflection, helping users challenge their beliefs and expand their perspectives through thoughtful dialogue.</p>
                  </div>
                  <div>
                    <h3>Research Goal</h3>
                    <p>The project seeks to foster an <b>open dialogue</b>, encouraging users to <b>revisit and challenge</b> their own perspectives. Through seamlessly integrating AI in the background, we aim to facilitate a sophisticated conversation between individuals and their insights, pushing the boundaries of <b>how AI can elegantly support and enhance these meaningful interactions</b>.</p>
                  </div>
                </div>
                <div className={styles.skillsContainer}>
                  <div>
                    <h4>research methods</h4>
                    <ul>
                      <li>Semi-structured Interviews</li>
                      <li>Field study</li>
                      <li>Survey</li>
                      <li>Thematic analysis</li>
                      <li>Google analytics</li>
                    </ul>
                  </div>
                  <div>
                    <h4>website development</h4>
                    <ul>
                      <li>HTML5, CSS3, JavaScript (React/Node.js)</li>
                      <li>Amazon AWS S3, Vercel</li>
                      <li>Google Authentication Login</li>
                      <li>Github version control</li>
                    </ul>
                  </div>
                  <div>
                    <h4>design tools</h4>
                    <ul>
                      <li>Figma</li>
                      <li>Miro</li>
                      <li>Adobe Suite</li>
                    </ul>
                  </div>
                </div>
                <LazyLoadImage src={images.singles.imagePlan.src} alt={images.singles.imagePlan.alt} className={styles.planImage} onClick={() => openLightbox(images.singles.imagePlan.src)} />
            </section>
            <section id="empathize" ref={sectionRefs.current.empathize}>
                <LazyLoadImage src={images.singles.interview.src} alt={images.singles.interview.alt} className={styles.interviewImage} onClick={() => openLightbox(images.singles.interview.src)} />
                <h2>2 - Semi-Structured Interview</h2>
                <p>To begin with, we conducted a semi-structured interview with <b>5 participants who are avid ebook readers</b>. We aim to understand their ebook reading practices, user experiences, and ideas on how ebook reading experiences could be enhanced.</p>
                <p>Click the image below to see the interview protocol and question list in full screen:</p>
                <LazyLoadImage src={images.singles.protocol.src} alt={images.singles.protocol.alt} className={styles.interviewImage} onClick={() => openLightbox(images.singles.protocol.src)} />
                <h3>Findings + Corresponding Design Goals</h3>
                <table border="1">
                  <tr>
                      <td><u>1. Annotations for Enriching Reading Experiences</u>:
                      Participants' annotation habits primarily facilitate <b>fact-checking, memory aid, and emotional grounding</b>. Annotations serve as a versatile tool, enriching reading experiences and providing <b>personalized insights</b>.</td>
                      <td><u>2. Reasons for Re-reading</u>:
                      Participants re-read books for varied motivations, such as <b>emotional solace, professional clarity,</b> and preparation for discussions or movie adaptations. They <b>discover new details</b> and experience <b>evolving perceptions</b> over time.</td>
                  </tr>
                  <tr>
                      <td><u>3. Sharing is Intimate</u>:
                      While <b>sharing highlights</b> in a book club setting is beneficial for fostering <b>deeper connections and discussions</b>, some participants refrain from sharing intimate highlights as they are sometimes <b>very personal</b>.</td>
                      <td><u>4. Stronger Attachment to Physical Books</u>:
                      Participants expressed a <b>stronger personal attachment to physical books over ebooks</b>, citing the tactile and sensory experiences they provide.</td>
                  </tr>
                  <tr>
                      <td colspan="2"><u>5. Potential Design Features</u>:
                      One participant suggested <b>incorporating GPT-generated keywords</b> to highlight themes and character experiences, which could enhance discussions in book clubs and make social sharing more engaging.</td>
                  </tr>
                </table>
                <p>After digesting these findings and prioritizing their importance, we have made 2 key decisions. First, in alignment with our research goals and respecting Finding #3's insight into the intimate nature of sharing, we have decided <i>not to pursue the social sharing feature</i>. Second, although Finding #4 presents an intriguing opportunity to recreate tangible and sensory interactions with digital highlights, we have deemed <i>other findings to be more feasible and significant for further development</i>.</p>
                <p>Therefore, we have set our <b>design goals</b> to:</p>
                <ul>
                    <li>Utilize annotations as design resources to offer <b>variations of content</b> that users have already marked as important. This aims to entice curiosity and mimic evolving perceptions.</li>
                    <li>Incorporate <b>GPT-generated keywords</b> to highlight themes and character experiences.</li>
                    <li>Create in-depth <b>dialogical interactions</b> between the user and generative AI.</li>
                </ul>
                <div className={styles.funfactContainer}>
                  <div></div>
                  <div>
                    <h5>Fun Fact</h5>
                    <p>From this stage, we have also renamed our project to 'Quologue' to better emphasize the integration of 'quotes' and 'dialogue'.</p>
                  </div>
                </div>
            </section>
            <section id="design" ref={sectionRefs.current.design}>
              <CustomSwiper images={images.design} />
              <h2>3 - Proposed Design</h2>
              <p>After the brainstorming session, we decided to have <b>5 key features</b> of Quologue:</p>
              <ol>
                <li>a <b>website-based</b> platform that could take customized .csv files or Amazon Kindle's .txt files as input,</li>
                <li>a responsive website that could make use of <b>ChatGPT's official APIs</b>,</li>
                <li>a <b>conversation</b> that invites user to guess what quotes they have highlighed in the past,</li>
                <li>a <b>reflective history page</b> that triggers user to extend their thinking about AI's remix, and </li>
                <li>a <b>keyword setting</b> feature that enables user to prime the next interaction.</li>
              </ol>
              <p>To achieve these features, we diagrammed the Sitemap and User Flow. Click to see the details:</p>
              <LazyLoadImage src={images.singles.sitemap.src} alt={images.singles.sitemap.alt} className={styles.sitemapImage} onClick={() => openLightbox(images.singles.sitemap.src)} />
              <LazyLoadImage src={images.singles.userFlow.src} alt={images.singles.userFlow.alt} className={styles.userFlowImage} onClick={() => openLightbox(images.singles.userFlow.src)} />
              <p>As the screenshot below shows, later we prototyped and designed our Quologue website on Figma, and developed the website by React.js. We use Amazon AWS S3 to store the user data securely and host the website on Vercel.</p>
              <LazyLoadImage src={images.singles.imageMiro.src} alt={images.singles.imageMiro.alt} className={styles.miroImage} onClick={() => openLightbox(images.singles.imageMiro.src)} />
                
            </section>
            <section id="test" ref={sectionRefs.current.test}>
                <h2>4 - Field Study</h2>
                <p>Next, we decided to recruit <b>10 participants</b> in North America to join our <b>8-week</b> field deployment study. To ensure the robustness of Quologue, our team members have used our own Kindle data to interact with the system before deployment.</p>
                <p>The field study is currently running. It will end in mid June 2024, and we aim to have an one-hour long closing interview with them to learn their experience of using Quologue. More details will be shared once we publish our results in a formal research paper.</p>
            </section>
            <section id="takeaways" ref={sectionRefs.current.takeaways}>
                <h2>5 - Overall Reflection</h2>
                <h3>How Research Changed the Design Direction</h3>
                <p>This research has significantly influenced our design direction, informed by insights shared by participants. It has uncovered evidence supporting design guidelines aimed at addressing specific user needs and enhancing the reading experience by making it continuous, generative, inviting, and conducive to advancing knowledge acquisition to the next level.</p>
                <p>To-Be Continued :)</p>
                <div>
                  {/*<h3>More Images</h3>*/}
                  {/*<Gallery images={images.more} rows={2} columns={5} />*/}
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

export default QuologueDetail;
