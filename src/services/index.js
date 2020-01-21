import axios from 'axios';
import env from '../configs/enviroments';
import githubRequest from './github';

const { algumBffUrl } = env();

const httpConfig = (options = {}) => ({
  headers: {
    'Content-Type': 'application/json',
    ...options,
  },
});

const instance = axios.create({
  baseURL: algumBffUrl,
  timeout: 30000,
  maxRedirects: 0,
});

export const httpGithub = () => githubRequest({ instance, httpConfig });

export default instance;
