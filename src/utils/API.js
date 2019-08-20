import axios from "./axiosMock.js";

export default {
  async GET(url, param = {}) {
    const res = await axios.get(url, param);
    return res.data;
  },
  async POST(url, data = {}) {
    const res = await axios.post(url, data);
    return res.data;
  }
};
