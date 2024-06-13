import imageProject from './img/3_olly.jpeg'

import imageContext1 from './img/context/context1.png'
import imageContext2 from './img/context/context2.jpg'
import imageContext3 from './img/context/context3.png'
import imageContext4 from './img/context/context4.png'


function importAll(r) {
  let images = [];
  r.keys().map((item, index) => { images.push({ src: r(item), alt: 'Olly Use Scenario' }); });
  return images;
}

// Assuming your images are stored in './img/more' and have appropriate extensions.
const imagesMore = importAll(require.context('./img/more', false, /\.(png|jpe?g|svg|JPG)$/));



const images = {

  singles: {
    imageProject:    { src: imageProject, alt: 'Olly Design' },
  },

  context: [
    { src: imageContext1, alt: 'Olly Context' },
    { src: imageContext2, alt: 'Olly Context' },
    { src: imageContext3, alt: 'Olly Context' },
    { src: imageContext4, alt: 'Olly Context' },
  ],

  more: imagesMore,
};

export default images;