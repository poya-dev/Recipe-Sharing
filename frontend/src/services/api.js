import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

const api = axios.create({
  baseURL: API_URL,
});

const authApi = axios.create({
  baseURL: API_URL,
});

authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const recipeService = {
  getAllRecipes: () => api.get('recipes/'),
  getRecipeById: (id) => api.get(`recipes/${id}/`),
};

export const authService = {
  login: (username, password) => api.post('login/', { username, password }),
  signup: (username, email, password) =>
    api.post('register/', { username, email, password }),
};
