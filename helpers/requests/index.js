import axios from 'axios';

import config from '@/config/index';

export const makeRequest = (url, method, data) =>
  axios({
    method,
    url,
    data,
  });

export const fetchImage = (path) => `${config.app.apiURL}${path}`
