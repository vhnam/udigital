import axios from 'axios';

axios.defaults.baseURL = process.env.API_PATH;

const apis = {
  getClients: {
    url: '/clients',
    method: 'GET',
  },
  getServices: {
    url: '/services',
    method: 'GET',
  },
  getAbout: {
    url: '/about',
    method: 'GET',
  },
  getWorks: {
    url: '/works',
    method: 'GET',
  },
  getReviews: {
    url: '/reviews',
    method: 'GET',
  },
  createFeedback: {
    url: '/feedbacks',
    method: 'POST',
  },
};

const config = {
  apis,
  app: {
    apiURL: process.env.API_PATH,
  },
};

export default config;
