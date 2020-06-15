import * as axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
});

export const getFilteredDrinks = (filter) =>{
  return axiosInstance.get(`filter.php?c=${filter}`)}

export const getFilters = () =>
    axiosInstance.get(`list.php?c=list`);

