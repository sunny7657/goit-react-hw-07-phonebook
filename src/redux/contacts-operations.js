import * as contactsApi from '../api/contacts-api';
import {
  fetchContactsError,
  fetchContactsLoading,
  fetchContactsSuccess,
} from './contacts-slice';

export const fetchContacts = async () => {
  const func = async dispatch => {
    try {
      dispatch(fetchContactsLoading());
      const data = await contactsApi.getContacts();
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error.message));
    }
  };
  return func;
};
