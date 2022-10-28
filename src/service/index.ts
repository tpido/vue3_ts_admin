/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Cache from '@/utils/Cache';
import { BASE_URL, TIME_OUT } from './config';
import myRequest from './request';

const MyRequest = new myRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors(config) {
      const token = Cache.getCache('token');
      if (token) config.headers!.Authorization = `Bearer ${token}`;
      return config;
    },
    requestInterceptorsCatch(err) {
      return err;
    },
    responseInterceptors(config) {
      return config.data;
    },
    responseInterceptorsCatch(err) {
      return err;
    }
  },
  showLoading: true
});

export default MyRequest;
