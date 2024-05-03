import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/sugarnest/v0.1/products";

export const listProducts = (page) => axios.get(`${REST_API_BASE_URL}?page=${page}`);
export const getProduct = (id) => axios.get(`${REST_API_BASE_URL}/${id}`);