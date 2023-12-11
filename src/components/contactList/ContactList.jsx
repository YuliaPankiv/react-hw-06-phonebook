import { ItemContact } from 'components/Item/Item';
import { Item, List } from './ContactList.styled';
import { selectFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contact);
  const filter = useSelector(selectFilter).toLowerCase().trim();
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter)
  );
  return (
    <>
      <List>
        {contacts &&
          filteredContacts.map(currentContact => (
            <Item key={currentContact.id}>
              <ItemContact currentContact={currentContact} />
            </Item>
          ))}
      </List>
    </>
  );
};
