import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className="ContactItem">
      <span>{name}: {number}</span>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;

