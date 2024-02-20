import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  // fetchContactsLoading: loadingReducer,
  // fetchContactsSuccess: (state, { payload }) => {
  //   state.isLoading = false;
  //   state.items = payload;
  // },
  // fetchContactsError: rejected,
  // addContactLoading: loadingReducer,
  // addContactSuccess: (state, { payload }) => {
  //   state.isLoading = false;
  //   state.items.push(payload);
  // },
  // addContactError: rejected,
  // deleteContactLoading: loadingReducer,
  // deleteContactSuccess: (state, { payload }) => {
  //   state.isLoading = false;
  //   state.items = state.items.filter(({ id }) => id !== payload);
  // },
  // deleteContactError: rejected,
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, rejected)

      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, rejected)

      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContact.rejected, rejected);
  },
});

export default contactsSlice.reducer;
