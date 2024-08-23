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
      const response = await authService.login(username, password);
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      set({ user, isAuthenticated: true, loading: false });
      return true;
    } catch (error) {
      set({ error: 'Login failed', loading: false });
      return false;
    }
  },

  signUp: async (username, email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await authService.signup(username, email, password);
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      set({ user, isAuthenticated: true, loading: false });
      return true;
    } catch (error) {
      set({ error: 'Sign up failed', loading: false });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    set({ user: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
