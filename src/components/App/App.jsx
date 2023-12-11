import { Container } from '@mui/material';
import { ContactList } from '../contactList/ContactList';

import { ContactForm } from '../ContactForm/ContactForm';
import Filter from '../filter/Filter';

const App = () => {
  return (
    <Container>
      <h1>Phone book</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};
export default App;
