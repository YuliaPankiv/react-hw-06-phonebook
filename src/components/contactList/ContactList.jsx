import { ItemContact } from 'components/Item/Item';
import { Item, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contact);
  debugger;
  const filter = useSelector(selectFilter).toLowerCase();
  console.log(filter);
  const visualContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  console.log(contacts);
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
