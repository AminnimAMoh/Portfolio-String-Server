import axios, { AxiosError, AxiosResponse } from "axios";

const axiosInterception=() => {
  const baseURL = 'https://mamp3-backend-2993171d3ed5.herokuapp.com/';
  const headers = { "Content-Type": "application/json" };
  
  const axiosInterceptor = axios.create({
    baseURL,
    timeout: 50000,
    headers,
  });

  const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };
  const onResponseError = (error: AxiosError): AxiosError => {
    return error;
  };

  axiosInterceptor.interceptors.response.use(onResponse, onResponseError);

  return axiosInterceptor;
};

export default axiosInterception
