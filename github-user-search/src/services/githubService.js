import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Fetch single user (still useful for direct lookups)
export const fetchUserData = async (username) => {
  const headers = token ? { Authorization: `token ${token}` } : {};
  const response = await axios.get(`${BASE_URL}/users/${username}`, { headers });
  return response.data;
};

// Advanced user search
export const searchUsers = async ({ username, location, minRepos }) => {
  const headers = token ? { Authorization: `token ${token}` } : {};

  // Build query string for GitHub Search API
  let query = username ? `${username} in:login` : '';
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`, { headers });
  return response.data.items; // API returns { total_count, incomplete_results, items }
};
