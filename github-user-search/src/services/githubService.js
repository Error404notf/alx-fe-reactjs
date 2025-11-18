// import axios from 'axios';

// // Base URL for GitHub API
// const BASE_URL = 'https://api.github.com';

// // Get API key from environment (optional)
// const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// // Create axios instance with default config
// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {}
// });

// /**
//  * Fetch user data by username
//  * @param {string} username - GitHub username
//  * @returns {Promise} - User data
//  */
// export const fetchUserData = async (username) => {
//   try {
//     const response = await axiosInstance.get(`/users/${username}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// /**
//  * Advanced search for users
//  * @param {object} params - Search parameters (username, location, minRepos)
//  * @returns {Promise} - Search results
//  */
// export const searchUsers = async ({ username, location, minRepos }) => {
//   try {
//     // Build query string
//     let query = username || '';
    
//     if (location) {
//       query += `+location:${location}`;
//     }
    
//     if (minRepos) {
//       query += `+repos:>=${minRepos}`;
//     }
    
//     const response = await axiosInstance.get(`/search/users?q=${query}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
