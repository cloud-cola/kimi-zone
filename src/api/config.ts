import axios from "axios";

export const kimiAxios = axios.create();

/***请求拦截***/
kimiAxios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

/***响应拦截***/
kimiAxios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        Promise.reject(error.message);
    }
);