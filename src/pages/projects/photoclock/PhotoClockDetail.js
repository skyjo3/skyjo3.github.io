// PhotoClockDetail.js
import React, { useState, useEffect, useRef } from 'react';
import './PhotoClockDetail.css';

import imageProject from './img/project.jpg'

const PhotoClockDetail = () => {

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
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { rootMargin: '-20% 0px', threshold: 0.1 }  // Trigger when 10% of the element is visible and expand the top margin
  );

  // Observe each section
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
  };
}, []);

  return (
    <div className="container">
      <div className="project-container">
        <div className="sidebar">
            <ul>
                <li><a href="#overview" className={activeSection === 'overview' ? 'active' : ''}>0 - overview</a></li>
                <li><a href="#research" className={activeSection === 'research' ? 'active' : ''}>1 - research</a></li>
                <li><a href="#empathize" className={activeSection === 'empathize' ? 'active' : ''}>2 - empathize</a></li>
                <li><a href="#design" className={activeSection === 'design' ? 'active' : ''}>3 - design</a></li>
                <li><a href="#test" className={activeSection === 'test' ? 'active' : ''}>4 - test</a></li>
                <li><a href="#takeaways" className={activeSection === 'takeaways' ? 'active' : ''}>5 - takeaways</a></li>
            </ul>
        </div>
        <div className="content">
            <img src={imageProject} alt='PhotoClock' className="project-image" />
            <section id="overview" ref={sectionRefs.current.overview}>
              <div className="overview-container">
                <div>
                  <h2>Overview</h2>
                  <p>PhotoClock is an iOS mobile app that enables people to revisit their photos previously taken at the same ‘clock time’ of the present moment. Following the ongoing flow of time, users perceive different memories in a dynamic manner. This project specifically provoke a question of when people would like their memories to re-emerge and how memories could be interconnected to enrich personal reflection.</p>
                </div>
                <div>
                  <h2>Team</h2>
                  <h6>Lead, Research, Design</h6>Amy Yo Sue Chen
                  <h6>Supervisor, Design</h6>William Odom
                  <h6>Co-supervisor</h6>Carman Neustaedter
                  <h6>Data Analysis Supprot</h6>Sol Kang
                </div>
              </div>
              <div>
                <h5>IMPACT / CONTRIBUTION</h5>
                <ul>
                  <li>This research changed the design strategy to use 'clock time' as a design material to reorganize photos.</li>
                  <li>This research created an innovative photo viewing experience that is more naturally triggered.</li>
                  <li>3 research publications in top-tier HCI conferences (ACM CHI + DIS)</li>
                </ul>
              </div>
            </section>
            <section id="research" ref={sectionRefs.current.research}>
                <h2>Research</h2>
                <p>It's hard to put together a meaningful UI prototype without making real requests to an API. By making real requests, you'll uncover problems with application flow, timing, and API design early, improving the quality of both the user experience and API. With Mockaroo, you can design your own mock APIs, You control the URLs, responses, and error conditions. Paralellize UI and API development and start delivering better applications faster today!</p>
            </section>
            <section id="empathize" ref={sectionRefs.current.empathize}>
                <h2>Empathize</h2>
                <p>If you're developing an application, you'll want to make sure you're testing it under conditions that closely simulate a production environment. In production, you'll have an army of users banging away at your app and filling your database with data, which puts stress on your code. If you're hand-entering data into a test environment one record at a time using the UI, you're never going to build up the volume and variety of data that your app will accumulate in a few days in production. Worse, the data you enter will be biased towards your own usage patterns and won't match real-world usage, leaving important bugs undiscovered.</p>
            </section>
            <section id="design" ref={sectionRefs.current.design}>
                <h2>Design</h2>
                <p>When your test database is filled with realistic looking data, you'll be more engaged as a tester. When you demonstrate new features to others, they'll understand them faster. Real data is varied and will contain characters that may not play nice with your code, such as apostrophes, or unicode characters from other languages. Testing with realistic data will make your app more robust because you'll catch errors that are likely to occur in production before release day.</p>
            </section>
            <section id="test" ref={sectionRefs.current.test}>
                <h2>Test</h2>
                <p>There are plenty of great data mocking libraries available for almost every language and platform. But not everyone is a programmer or has time to learn a new framework. Mockaroo allows you to quickly and easily to download large amounts of randomly generated test data based on your own specs which you can then load directly into your test environment using SQL or CSV formats. No programming is required.</p>
            </section>
            <section id="takeaways" ref={sectionRefs.current.takeaways}>
                <h2>Takeaways</h2>
                <p>Concluding remarks and outcomes of the PhotoClock project...</p>
            </section>
        </div>
      </div>
    </div>
  );
};

export default PhotoClockDetail;
