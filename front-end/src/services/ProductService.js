import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/products";

export const listProducts = (page) => axios.get(`${REST_API_BASE_URL}?page=${page}`);