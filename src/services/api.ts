import axios from "axios";

export const instance = axios.create({
  baseURL: "https://pets-json-server-m3.herokuapp.com/",
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
});
