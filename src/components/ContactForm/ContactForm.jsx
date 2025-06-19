import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { useState } from 'react';
import { selectContacts } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;

