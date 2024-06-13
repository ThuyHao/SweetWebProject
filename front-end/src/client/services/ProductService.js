import axios from "axios";

export const REST_API_BASE_URL = "http://localhost:8080/sugarnest/v0.1";

export const listProducts = (page) => axios.get(`${REST_API_BASE_URL}/products?page=${page}`);
export const getProduct = (id) => axios.get(`${REST_API_BASE_URL}/products/${id}`);
export const getProductByCategory = (category, limit) => axios.get(`${REST_API_BASE_URL}/products/category/${category}/limit/${limit}`);
export const listCategories = () => axios.get(`${REST_API_BASE_URL}/categories/all`);
export const loginToken = (accountName, password) => axios.post(`${REST_API_BASE_URL}/auth/login`, { accountName, password });

