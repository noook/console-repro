import { defineStore } from 'pinia';
import User from '../models/User';

const TOKEN_STORAGE_KEY = 'access_token';

const useAuthStore = defineStore('auth', {
  state: () => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    const user = token ? new User(token) : null;

    return { token, user };
  },
  getters: {
    isAuthenticated: (state) => state.user !== null,
  },
  actions: {
    login(token: string) {
      this.user = new User(token);
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
    },
    logout() {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      this.user = null;
    },
  },
});

export default useAuthStore;
