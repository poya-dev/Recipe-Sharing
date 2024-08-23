import { create } from 'zustand';
import axios from 'axios';

import { authService } from '../services/api';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  login: async (username, password) => {
    set({ loading: true, error: null });
    try {
      const { data } = await authService.login(username, password);
      localStorage.setItem('token', data.access);
      set({ isAuthenticated: true, loading: false });
      return true;
    } catch (error) {
      set({ error: 'Login failed', loading: false });
      return false;
    }
  },

  signUp: async (username, email, password) => {
    set({ loading: true, error: null });
    try {
      const { data } = await authService.signup(username, email, password);
      localStorage.setItem('token', data.access);
      set({ isAuthenticated: true, loading: false });
      return true;
    } catch (error) {
      set({ error: 'Sign up failed', loading: false });
      return false;
    }
  },

  checkAuth: async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await authService.getCurrentUser();
        set({ user: response.data, isAuthenticated: true });
      } catch (error) {
        localStorage.removeItem('token');
        set({ user: null, isAuthenticated: false });
      }
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    set({ user: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
