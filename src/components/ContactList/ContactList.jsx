import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;

