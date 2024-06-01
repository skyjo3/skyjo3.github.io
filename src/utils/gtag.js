// src/utilities/gtag.js
export const GA_TRACKING_ID = 'G-4MY20W8VK3'; // Replace with your actual GA tracking ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
