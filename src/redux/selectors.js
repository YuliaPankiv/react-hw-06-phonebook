export const selectContacts = state => {
  console.log(state.contacts.contact);
  return state.contacts.contact;
};
export const selectFilter = state => state.filter.filter;
