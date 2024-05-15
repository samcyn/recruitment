import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

class HttpClient {
  baseUrl: string = 'https://663f9c7de3a7c3218a4d89ab.mockapi.io/api/v1';
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: this.baseUrl,
    });
  }

  get<T>(url: string, config?: AxiosRequestConfig<any> | undefined) {
    return this.instance.get<T>(url, config);
  }

  post(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined) {
    return this.instance.post(url, data, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined) {
    return this.instance.put(url, data, config);
  }
  delete(url: string, config?: AxiosRequestConfig<any> | undefined) {
    return this.instance.delete(url, config);
  }
}


export default HttpClient;