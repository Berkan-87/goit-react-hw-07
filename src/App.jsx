import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { fetchContacts } from './redux/contactsOps';
import { selectFilteredContacts, selectLoading, selectError } from './redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p style={{ textAlign: 'center', color: '#A0A0A0', marginTop: '20px' }}>No contacts available.</p>
      )}
    </div>
  );
};

export default App;
