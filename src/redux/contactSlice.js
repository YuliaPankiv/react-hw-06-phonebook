import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contact: [] },
  reducers: {
    addContact: {
      prepare: contact => {
        return { payload: { ...contact, id: nanoid() } };
      },
      reducer: (state, { payload }) => {
        state.contact.push(payload);
      },
    },

    deleteContact: (state, { payload }) => {
      state.contact = state.contact.filter(el => el.id !== payload.id);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
