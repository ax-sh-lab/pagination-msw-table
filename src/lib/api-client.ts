import axios, { type InternalAxiosRequestConfig } from 'axios';

import { env } from '../../env';

export const API_ROUTE = {
  PROFILE: '/api/profile',
  USERS: '/api/users',
} as const;

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  // const token = storage.getToken();
  // if (token) {
  //   config.headers.authorization = `${token}`;
  // }
  // config.headers.Accept = "application/json";
  return config;
}

//  adapter: "http", needed for test fix
export const apiClient = axios.create({
  // adapter: "http",
  // baseURL: " http://localhost:3000",
  timeout: 8000,
  baseURL: env.NEXT_PUBLIC_API_URL,
});

apiClient.interceptors.request.use(authRequestInterceptor);
apiClient.interceptors.request.use(
  request => {
    // setAuthHeaders(request);
    return request;
  },
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    const message = error.response?.data?.message || error.message;
    console.log('Axios', message);
    // useNotificationStore.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });

    return Promise.reject(error);
  },
);

export function fetchProfile() {
  return apiClient.get(API_ROUTE.PROFILE).then(response => response.data);
}
