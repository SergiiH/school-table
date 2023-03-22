import { axiosInstance } from "./axiosConfig";

//user api
export const getAllUserApi = () => {
  return axiosInstance.get(`/v1/2/Schoolboy`);
};

export const getAllLessonsApi = () => {
  return axiosInstance.get(`/v1/2/Column`);
};

export const getRateApi = () => {
  return axiosInstance.get(`/v1/2/Rate`);
};

export const addRateApi = (body) => {
  // {   SchoolboyId: int,   ColumnId: int,   Title: string }

  return axiosInstance.post(`/v1/2/Rate`, body);
};

export const removeRateApi = (body) => {
  // {   SchoolboyId: int,   ColumnId: int }

  return axiosInstance.post(`/v1/2/UnRate`, body);
};
