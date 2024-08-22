import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  login: async (username, password) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/login/`, {
        username,
        password,
      });
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
      const response = await axios.post(`${API_URL}/register/`, {
        username,
        email,
        password,
      });
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
