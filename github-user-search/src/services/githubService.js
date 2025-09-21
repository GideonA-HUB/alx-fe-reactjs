import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  const headers = token ? { Authorization: `token ${token}` } : {};
  const response = await axios.get(`${BASE_URL}/${username}`, { headers });
  return response.data;
};
