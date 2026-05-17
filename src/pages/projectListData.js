// projectData.js
import image1 from '../assets/img/project-list/1-ai-roadmap.jpg';
import image2 from '../assets/img/project-list/2-design-systems.jpg';
import image3 from '../assets/img/project-list/3-figma-plugins.jpg';
import image4 from '../assets/img/project-list/4-quologue.jpg';
import image5 from '../assets/img/project-list/5-photoclock.png';
import image6 from '../assets/img/project-list/6-chronoscope.jpg';
import image7 from '../assets/img/project-list/7-olly.jpeg';
import image8 from '../assets/img/project-list/8-womany.png';
// unused (commented-out projects)
// import imageCrescendo from '../assets/img/project-list/3-crescendo.jpg';
// import imageMentalMap from '../assets/img/project-list/6-mental-map.png';
// import imageOlo from '../assets/img/project-list/7-olo.jpg';
// import imageSlowGame from '../assets/img/project-list/9-slow-game.jpg';

const projectsData = [
  {
    title: 'Befriending AI in Design: A Roadmap',
    description: 'Coming soon.',
    imageUrl: image1,
    linkPath: '/projects/ai-roadmap',
    tags: ['AI', 'all'],
  },
  {
    title: 'Rebrand x Design Systems',
    description: 'Coming soon.',
    imageUrl: image2,
    linkPath: '/projects/design-systems',
    tags: ['all'],
  },
  {
    title: 'Creativity at Scale, via Figma Plugins',
    description: 'Coming soon.',
    imageUrl: image3,
    linkPath: '/projects/figma-plugins',
    tags: ['all'],
  },
  {
    title: 'Quologue',
    description: 'Reimagining everyday reading experience: AI-infused insights inspiring the rediscovery of cherished books.',
    imageUrl: image4,
    linkPath: '/projects/quologue',
    tags: ['AI', 'digital reading', 'website', 'mobile', 'all'],
  },
  {
    title: 'PhotoClock',
    description: 'Resurfacing photos taken at this time of day in your past to trigger curiosity, anticipation, and intimacy.',
    imageUrl: image5,
    linkPath: '/projects/photoclock',
    tags: ['photo', 'video', 'mobile', 'AI', 'journey through time', 'all'],
  },
  {
    title: 'Chronoscope',
    description: 'Exploring photos through time, using tangible interaction to support curious discovery and reflection on life history.',
    imageUrl: image6,
    linkPath: '/projects/chronoscope',
    tags: ['photo', 'hardware', 'mobile', 'journey through time', 'all'],
  },
  {
    title: 'Olly',
    description: 'Embodying one\'s music listening history data to evoke memories of different life stages.',
    imageUrl: image7,
    linkPath: '/projects/olly',
    tags: ['journey through time', 'hardware', 'all'],
  },
  {
    title: 'Womany',
    description: 'Unlocking self-growth and creativity: the news app redesigned for readers interested in gender equality.',
    imageUrl: image8,
    linkPath: '/projects/womany',
    tags: ['digital reading', 'mobile', 'all'],
  },
  // {
  //   title: 'CrescendoMessage',
  //   description: 'Investigating new forms of photo sharing between loved ones with an aim to enrich intimate communication.',
  //   imageUrl: imageCrescendo,
  //   linkPath: '/projects/crescendo',
  //   tags: ['photos', 'mobile', 'field study', 'messaging', 'all'],
  // },
  // {
  //   title: 'Mental Map',
  //   description: 'Supporting visually impaired people to build mental map of a new environment via mobile interaction.',
  //   imageUrl: imageMentalMap,
  //   linkPath: '/projects/mental-map',
  //   tags: ['accessibility', 'mobile', 'contextual inquiry', 'all'],
  // },
  // {
  //   title: 'Olo Radio',
  //   description: 'Reflecting on personal listening history through tangible interaction with a domestic music player.',
  //   imageUrl: imageOlo,
  //   linkPath: '/projects/olo',
  //   tags: ['audio', 'tangible', 'field study', 'all'],
  // },
  // {
  //   title: 'Slow Game',
  //   description: 'Conceptualizing time alternatively by playing the Snake game one step every 18 hours.',
  //   imageUrl: imageSlowGame,
  //   linkPath: '/projects/slow-game',
  //   tags: ['temporality', 'tangible', 'research through design', 'all'],
  // }
];

export default projectsData;
