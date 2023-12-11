import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Label } from './ContactForm.styled';
import { addContact } from '../../redux/contactSlice';
// import { selectContacts } from '../../redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contact);
  console.log(contacts);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(3),
      name,
      number,
    };
    if (checkContactNameRepeat(name)) {
      alert(`${name} already exists`);
    } else {
      dispatch(addContact(newContact));
    }

    resetState();
  };
  const resetState = () => {
    setName('');
    setNumber('');
  };

  const checkContactNameRepeat = name => {
    const temporaryNameArray = contacts.map(item => item.name);
    // console.log(temporaryNameArray);
    return temporaryNameArray.includes(name);
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Tel
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
