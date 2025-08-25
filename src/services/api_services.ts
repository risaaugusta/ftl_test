import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://uat-api.ftlgym.com/api/v1/test/jadwalruangan',  
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
