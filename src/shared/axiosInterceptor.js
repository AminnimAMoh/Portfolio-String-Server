"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axiosInterception = () => {
    const baseURL = process.env.REACT_APP_BASE_DESTINATION;
    const headers = { "Content-Type": "application/json" };
    const axiosInterceptor = axios_1.default.create({
        baseURL,
        timeout: 5000,
        headers,
    });
    const onResponse = (response) => {
        return response;
    };
    const onResponseError = (error) => {
        return error;
    };
    axiosInterceptor.interceptors.response.use(onResponse, onResponseError);
    return axiosInterceptor;
};
exports.default = axiosInterception;
