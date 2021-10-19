import axios from 'axios';
import useAuthStore from '@/store/auth';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/v4/console/api`,
});

const authStore = useAuthStore();

instance.interceptors.request.use(
  (config) => {
    const headers = { ...config.headers, Authorization: `Bearer ${authStore.token}` };
    // eslint-disable-next-line no-param-reassign
    config.headers = headers;

    return config;
  },
);

export default instance;
