import Contact from 'components/Contact/Contact';
import Notification from 'components/Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {filteredContacts.length === 0 ? (
        <Notification message="No contacts matching given criteria"></Notification>
      ) : (
        <ul>
          {filteredContacts.map(contact => {
            const { id, name, phone } = contact;

            return (
              <li key={id}>
                <Contact
                  id={id}
                  name={name}
                  phone={phone}
                  onHandleDeleteContact={handleDeleteContact}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
