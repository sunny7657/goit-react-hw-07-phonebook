import * as contactsApi from '../api/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await contactsApi.requestFetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.requestAddContact(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.requestDeleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchContactsLoading());
//       const data = await contactsApi.requestFetchContacts();
//       dispatch(fetchContactsSuccess(data));
//     } catch (error) {
//       dispatch(fetchContactsError(error.message));
//     }
//   };
//   return func;
// };

// export const addContact = body => {
//   const func = async dispatch => {
//     try {
//       dispatch(addContactLoading());
//       const data = await contactsApi.requestAddContact(body);
//       dispatch(addContactSuccess(data));
//     } catch (error) {
//       dispatch(addContactError(error.message));
//     }
//   };
//   return func;
// };

// export const deleteContact = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(deleteContactLoading());
//       await contactsApi.requestDeleteContact(id);
//       dispatch(deleteContactSuccess(id));
//     } catch (error) {
//       dispatch(deleteContactError(error.message));
//     }
//   };
//   return func;
// };
