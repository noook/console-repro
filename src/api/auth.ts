import axios from 'axios';

export async function login(credentials: { username: string, password: string }) {
  try {
    const { data } = await axios.post<{ token: string }>(`${import.meta.env.VITE_API_URL}/api/login_check`, credentials);
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
