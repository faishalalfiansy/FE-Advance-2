import axios from "axios";

const BASE_URL = "https://67f1488ac733555e24acb4bb.mockapi.io/users";

// GET data users
export const getData = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// POST data user baru
export const postData = async (data) => {
  const response = await axios.post(BASE_URL, data);
  return response.data;
};