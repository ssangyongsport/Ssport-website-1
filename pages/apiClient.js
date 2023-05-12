import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL, // 使用環境變數設定API基址
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  },
});

export default apiClient;
