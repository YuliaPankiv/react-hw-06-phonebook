import { createSlice } from '@reduxjs/toolkit';
import start from '../startContacts.json';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contact: start },

  reducers: {
    addContact: (state, { payload }) => {
      state.contact.push(payload);
    },

    deleteContact: (state, { payload }) => {
      state.contact = state.contact.filter(el => el.id !== payload.id);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
