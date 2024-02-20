import * as contactsApi from '../api/contacts-api';
import {
  fetchContactsError,
  fetchContactsLoading,
  fetchContactsSuccess,
  addContactLoading,
  addContactSuccess,
  addContactError,
  deleteContactLoading,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-slice';

export const fetchContactsOperation = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchContactsLoading());
      const data = await contactsApi.requestFetchContacts();
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error.message));
    }
  };
  return func;
};

export const addContactOperation = body => {
  const func = async dispatch => {
    try {
      dispatch(addContactLoading());
      const data = await contactsApi.requestAddContact(body);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error.message));
    }
  };
  return func;
};

export const deleteContactOperation = id => {
  const func = async dispatch => {
    try {
      dispatch(deleteContactLoading());
      await contactsApi.requestDeleteContact(id);
      dispatch(deleteContactSuccess(id));
    } catch (error) {
      dispatch(deleteContactError(error.message));
    }
  };
  return func;
};
