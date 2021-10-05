import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getName = () => API.get("/");
export const createPost = (newOrder) => API.post("/order", newOrder);
