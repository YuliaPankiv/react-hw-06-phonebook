import { ItemContact } from 'components/Item/Item';
import { Item, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter).toLowerCase();
  const visualContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  return (
    <>
      <List>
        {contacts &&
          visualContact.map(currentContact => (
            <Item key={currentContact.id}>
              <ItemContact currentContact={currentContact} />
            </Item>
          ))}
      </List>
    </>
  );
};
