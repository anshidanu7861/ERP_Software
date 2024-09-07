import axios from "axios";
import envConfig from "./constants";

export const axiosConfig = axios.create({
  baseURL: `${envConfig.server_url}/api/v1/admin`,
});
