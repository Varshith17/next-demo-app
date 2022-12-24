import axios from 'axios';

const axiosConfig = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json',
  },
  baseURL: `https://edens-news.herokuapp.com`,
  timeout: 60000,
  responseType: 'json',
});

axiosConfig.interceptors.response.use(
  function (response) {
    return {
      sucess: true,
      result: response
    };
  }, 
  function (error) {
    let res = error.response;
    console.log("Looks like there was a problem. Status Code: " + res?.status + res?.data);
    return {
      sucess: false,
      result: error.response
    };
  }
);


export default axiosConfig;