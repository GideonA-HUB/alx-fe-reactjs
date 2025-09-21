import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

/**
 * Fetch a single user by username (basic search)
 */
export const fetchUserData = async (username) => {
  const headers = token ? { Authorization: `token ${token}` } : {};
  const response = await axios.get(`${BASE_URL}/users/${username}`, { headers });
  return response.data;
};

/**
 * Fetch users with advanced search criteria (location, repos, etc.)
 * Example query: "john location:lagos repos:>10"
 */
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  const headers = token ? { Authorization: `token ${token}` } : {};

  // Build the query string for GitHub’s search API
  let query = username ? `${username}` : '';
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`, { headers });
  return response.data.items; // GitHub search API returns { total_count, items }
};
