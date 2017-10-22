import axios from 'axios';

export const searchClasses = params => (
  axios({
    method: 'get',
    url: '/classes/search',
    params,
  })
    .then(({ data }) => (
      data.classes
    ))
);
