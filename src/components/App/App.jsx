import { ContactList } from 'components/contactList/ContactList';
import { Container } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import Filter from 'components/filter/Filter';

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
