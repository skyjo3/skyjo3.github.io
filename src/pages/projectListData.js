// projectData.js
import image1 from '../assets/img/project-list/1-ai-roadmap.png';
import image2 from '../assets/img/project-list/2-design-systems.jpg';
import image3 from '../assets/img/project-list/3-figma-plugins.jpg';
import image4 from '../assets/img/project-list/4-quologue.jpg';
import image5 from '../assets/img/project-list/5-photoclock.png';
import image6 from '../assets/img/project-list/6-chronoscope.jpg';
import image7 from '../assets/img/project-list/7-olly.jpeg';
import image8 from '../assets/img/project-list/8-womany.png';

const projectsData = [
  {
    title: 'Befriending AI in Design: A Roadmap',
    description: 'Creating paths for design teams to adopt AI thoughtfully — from mindset shifts to tool integrations and creative agency.',
    imageUrl: image1,
    linkPath: '/projects/ai-roadmap',
    tags: ['AI', 'design systems', 'startegy', 'all'],
    passwordProtected: true,
  },
  {
    title: 'Rebrand x Design Systems',
    description: 'Unifying a rebranded visual language into a living design system, testing experiences across products at scale.',
    imageUrl: image2,
    linkPath: '/projects/design-systems',
    tags: ['AI', 'design systems', 'startegy', 'mobile', 'web', 'all'],
    passwordProtected: true,
  },
  {
    title: 'Creativity at Scale, via Figma Plugins',
    description: 'Building Figma plugins to empower design work, freeing teams to focus on craft and high-impact creative decisions.',
    imageUrl: image3,
    linkPath: '/projects/figma-plugins',
    tags: ['AI', 'design systems', 'web', 'all'],
    passwordProtected: true,
  },
  {
    title: 'Quologue',
    description: 'Reimagining everyday reading experience: AI-infused insights inspiring the rediscovery of cherished books.',
    imageUrl: image4,
    linkPath: '/projects/quologue',
    tags: ['AI', 'reading', 'web', 'mobile', 'all'],
  },
  {
    title: 'PhotoClock',
    description: 'Resurfacing photos taken at this time of day in your past to trigger curiosity, anticipation, and intimacy.',
    imageUrl: image5,
    linkPath: '/projects/photoclock',
    tags: ['photo', 'video', 'mobile', 'AI', 'data', 'all'],
  },
  {
    title: 'Chronoscope',
    description: 'Exploring photos through time, using tangible interaction to support curious discovery and reflection on life history.',
    imageUrl: image6,
    linkPath: '/projects/chronoscope',
    tags: ['photo', 'hardware', 'mobile', 'data', 'all'],
  },
  {
    title: 'Olly',
    description: 'Embodying one\'s music listening history data to evoke memories of different life stages.',
    imageUrl: image7,
    linkPath: '/projects/olly',
    tags: ['data', 'hardware', 'all'],
  },
  {
    title: 'Womany',
    description: 'Unlocking self-growth and creativity: the news app redesigned for readers interested in gender equality.',
    imageUrl: image8,
    linkPath: '/projects/womany',
    tags: ['reading', 'mobile', 'all'],
  },
];

export default projectsData;
