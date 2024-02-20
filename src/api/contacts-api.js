import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://65d3d18f522627d5010993d8.mockapi.io/api/contacts',
});

export const requestFetchContacts = async () => {
  const { data } = await axiosInstance.get('/');
  return data;
};

export const requestAddContact = async body => {
  const { data } = await axiosInstance.post('/', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await axiosInstance.delete(`/${id}`);
  return data;
};
