import axios from "axios";
import { carryHomeApi, prodApi } from "../api/instances.json";

axios.defaults.baseURL = `${process.env.LOCAL_HOST_BASE_URL}/carryhome-api/`;
axios.defaults.headers["Content-Type"] = "application/json";
// axios.defaults.headers["Access-Control-Allow-Headers"] = "*";
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
