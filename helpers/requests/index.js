import axios from 'axios';

import config from '@/config/index';

export const makeRequest = (url, method, data) =>
  axios({
    method,
    url,
    data,
  });

export const fetchImage = (path) => `${config.app.apiURL}${path}`;

export const getErrorMessage = (error) => {
  if (error.data?.data?.errors) {
    let messages = '';
    let isFirst = true;
    const errors = error.data.data.errors;

    Object.keys(errors).forEach((err) => {
      const error = errors[err];
      error.forEach((_err) => {
        if (isFirst) {
          isFirst = false;
        } else {
          messages += '\n\n';
        }
        messages += `- ${_err}`;
      });
    });

    return messages;
  }

  return {
    message: 'Something went wrong!',
  };
};
