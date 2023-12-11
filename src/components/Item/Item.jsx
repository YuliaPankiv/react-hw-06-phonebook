import { SlUserUnfollow } from 'react-icons/sl';
import { Delete } from 'components/contactList/ContactList.styled';
import { deleteContact } from '../../redux/contactSlice';
import { useDispatch } from 'react-redux';

export const ItemContact = ({ currentContact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        <span>{name}</span>: <span>{number}</span>
      </p>
      <Delete onClick={() => dispatch(deleteContact({ id }))}>
        <SlUserUnfollow />
      </Delete>
    </>
  );
};
