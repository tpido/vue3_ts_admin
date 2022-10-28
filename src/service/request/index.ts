/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { ElLoading } from 'element-plus';
import type { AxiosInstance } from 'axios';
import type { myRequestInterceptors, myRequestConfig } from './types';

export default class myRequest {
  instance: AxiosInstance;
  interceptors?: myRequestInterceptors;
  elLoading?: any;
  showLoading: boolean;

  constructor(config: myRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? false;

    /*所有实例对象的拦截 */
    this.instance.interceptors.request.use(
      (request) => {
        if (this.showLoading) {
          this.elLoading = ElLoading.service({
            fullscreen: true,
            lock: true,
            text: '正在请求数据......',
            background: 'rgba(0, 0, 0, 0.25)'
          });
        }

        return request;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.elLoading?.close();
        }, 500);
        return res;
      },
      (err) => {
        console.log('err');
        setTimeout(() => {
          this.elLoading?.close();
        }, 500);
        return err;
      }
    );

    /*对象自定义的拦截器 */
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    );
  }

  request<T>(config: myRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      /*每个方法中的请求拦截 */
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }

      if (config.showLoading === false) this.showLoading = config.showLoading;

      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res);
          }
          /*将这个设置成true防止影响下一次的请求 */
          this.showLoading = true;
          resolve(res);
        },
        (err) => {
          if (config.interceptors?.responseInterceptorsCatch) {
            err = config.interceptors.responseInterceptorsCatch(err);
          }
          reject(err);
        }
      );
    });
  }

  get<T = any>(config: myRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T = any>(config: myRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }

  delete<T = any>(config: myRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }

  patch<T = any>(config: myRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}
