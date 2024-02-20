import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://65d3d18f522627d5010993d8.mockapi.io/api/contacts',
});

export const getContacts = async () => {
  const { data } = await axiosInstance.get('/');
  return data;
};
