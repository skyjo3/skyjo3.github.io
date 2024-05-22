// projectData.js
import image1 from '../assets/img/project-list/1-photoclock.png';
import image2 from '../assets/img/project-list/2-chronoscope.png';
import image3 from '../assets/img/project-list/3-crescendo.jpg';
import image4 from '../assets/img/project-list/4-womany.png';
import image5 from '../assets/img/project-list/5-quologue.png';
import image6 from '../assets/img/project-list/6-mental-map.png';
import image7 from '../assets/img/project-list/7-olo.jpg';
import image8 from '../assets/img/project-list/8_olly.jpeg';
import image9 from '../assets/img/project-list/9-slow-game.jpg';

const projects = [
  {
    title: 'PhotoClock',
    description: 'Resurfacing photos taken at this time of day in your past to trigger curiosity, anticipation, and intimacy.',
    imageUrl: image1,
    linkPath: '/projects/photoclock',
  },
  {
    title: 'Chronoscope',
    description: 'Exploring photos through time, using tangible interaction to support curious discovery and reflection on life history.',
    imageUrl: image2,
    linkPath: '/projects/chronoscope',
  },
  {
    title: 'CrescendoMessage',
    description: 'Investigating new forms of photo sharing between loved ones with an aim to enrich intimate communication.',
    imageUrl: image3,
    linkPath: '/projects/crescendo',
  },
  {
    title: 'Womany',
    description: 'Unlocking self-growth and creativity: the news app redesigned for readers interested in gender equality.',
    imageUrl: image4,
    linkPath: '/projects/womany',
  },
  {
    title: 'Quologue',
    description: 'Reimagining everyday reading experience: AI-infused insights inspiring the rediscovery of cherished books.',
    imageUrl: image5,
    linkPath: '/projects/quologue',
  },
  {
    title: 'Mental Map',
    description: 'Supporting visually impaired people to build mental map of a new environment via mobile interaction.',
    imageUrl: image6,
    linkPath: '/projects/mental-map',
  },
  {
    title: 'Olo Radio',
    description: 'Reflecting on personal listening history through tangible interaction with a domestic music player.',
    imageUrl: image7,
    linkPath: '/projects/olo',
  },
  {
    title: 'Olly',
    description: 'Embodying one\'s music listening history data to invite memories in different life stages.',
    imageUrl: image8,
    linkPath: '/projects/olly',
  },
  {
    title: 'Slow Game',
    description: 'Conceptualizing time alternatively by playing the Snake game one step every 18 hours.',
    imageUrl: image9,
    linkPath: '/projects/slow-game',
  }
];

export default projects;
