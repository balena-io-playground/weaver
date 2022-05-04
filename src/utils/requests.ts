import axios from "axios";

export const cloneRepo = (repoUrl: string) => {
  if(!process.env.REACT_APP_SERVER_URL) {
    return Promise.reject('Missing REACT_APP_SERVER_URL env var');
  }
  const url = `${process.env.REACT_APP_SERVER_URL}/clone`;
  return axios.post(url, {data: repoUrl});
}

export const getRepoInfo = () => {
  if(!process.env.REACT_APP_SERVER_URL) {
    return Promise.reject('Missing REACT_APP_SERVER_URL env var');
  }
  const url = `${process.env.REACT_APP_SERVER_URL}/getRepoInfo`;
  return axios.get(url);
} 