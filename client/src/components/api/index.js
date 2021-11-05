import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getName = () => API.get("/share");
export const getShare = () => API.get("/");
export const createShare = (newShare) => API.post("/", newShare);
export const createPost = (newPost) => API.post("/order", newPost);
export const fetchPosts = () => API.get(`/order`);
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
