import axios from "axios";

const API = axios.create({ baseURL: "http://192.168.100.76:5000" });

export const getName = () => API.get("/");
export const createPost = (order) => API.post("/order/order", order);
