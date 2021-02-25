const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const axios = require("axios");

const baseUrl =
  process.env === "production"
    ? "https://ll.thespacedevs.com/2.0.0/"
    : "https://lldev.thespacedevs.com/2.0.0/";

const headers = {
  authorization: `token ${ACCESS_TOKEN}`,
};

const api = axios.create({
  headers: headers,
  baseURL: baseUrl,
});

export default api;
