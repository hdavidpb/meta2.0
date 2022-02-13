import axios from "axios";
export function reloadUnauthorized(error: any) {
  if (error.response.data.message === "Unauthorized") {
    window.location.reload();
    return;
  }
}
const rest = axios.create();

const token = localStorage.getItem("access")!!;

rest.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers!["Authorization"] = "Bearer " + token;
    }
    config.headers!["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export { rest };
