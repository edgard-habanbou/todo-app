import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "https://localhost:3000";
axios.defaults.headers["Authorization"] =
  "Bearer " + localStorage.getItem("token");

class base {
  async get(url) {
    try {
      const response = await axios.get(url);
      return response?.data;
    } catch (error) {
      return error;
    }
  }

  async post(url, data) {
    try {
      const response = await axios.post(url, data);
      return response?.data;
    } catch (error) {
      return error;
    }
  }

  async put(url, data) {
    try {
      const response = await axios.put(url, data);
      return response?.data;
    } catch (error) {
      return error;
    }
  }

  async delete(url) {
    try {
      const response = await axios.delete(url);
      return response?.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export const api = new base();
