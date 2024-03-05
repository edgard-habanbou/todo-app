import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "http://localhost:8000";
axios.defaults.headers["Authorization"] =
  "Bearer " + localStorage.getItem("token");

class base {
  async get(url: string) {
    try {
      const response = await axios.get(url);
      return response?.data;
    } catch (error: any) {
      return error;
    }
  }

  async post(url: string, data: any) {
    try {
      const response = await axios.post(url, data);
      return response?.data;
    } catch (error: any) {
      return error;
    }
  }

  async put(url: string, data: any) {
    try {
      const response = await axios.put(url, data);
      return response?.data;
    } catch (error: any) {
      return error;
    }
  }

  async delete(url: string) {
    try {
      const response = await axios.delete(url);
      return response?.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}

export const api = new base();
