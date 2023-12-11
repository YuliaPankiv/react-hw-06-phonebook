import { createSlice } from '@reduxjs/toolkit';
const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contact: [] },
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
