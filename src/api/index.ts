import axios, { AxiosInstance } from 'axios';

import { addTokenBeforeRequest } from './interceptors/authInterceptor';
import { refreshToken } from './interceptors/refreshInterceptor';
import { CONFIG } from './config';

export const http: AxiosInstance = axios.create({
  baseURL: CONFIG.apiUrl,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000/',
    'Access-Control-Allow-Credentials': true
  }
});

// http
// http.interceptors.request.use(addTokenBeforeRequest);
// http.interceptors.response.use(response => response, refreshToken);
