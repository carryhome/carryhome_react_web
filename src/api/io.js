import axios from "axios";
import { carryHomeApi, prodApi } from "../api/instances.json";

let baseUrl =
  window.location.host.startsWith("localhost") ||
  window.location.host.startsWith("carryhome")
    ? carryHomeApi
    : prodApi;

// Add a request interceptor
axios.interceptors.request.use();

//Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  });

axios.defaults.baseURL = `${baseUrl}/carryhome/`;
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Access-Control-Allow-Headers"] = "*";
axios.defaults.withCredentials = true;

export const io = async ({ url, method, data, params, headers }) => {
  return await axios({
    url,
    method,
    headers,
    params,
    data,
  });
};
