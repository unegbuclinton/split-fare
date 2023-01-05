import axios from 'axios';
export const getData = (url) => {
  axios({
    method: 'get',
    url: url,
    responseType: 'stream',
  }).then(function (response) {
    return response.data;
  });
};

export const postData = (url, data) => {
  axios({
    method: 'post',
    url: url,
    data: data,
  }).then(function (response) {
    return response.data;
  });
};
