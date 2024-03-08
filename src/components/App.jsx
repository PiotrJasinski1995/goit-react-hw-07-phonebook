import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import MainHeading from './MainHeading/MainHeading';
import Notification from './Notification/Notification';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import Loader from './Loader/Loader';
import ColumnDiv from './ColumnDiv/ColumnDiv';

const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <MainHeading>Phonebook App</MainHeading>
      <Section title="Phonebook">
        <ColumnDiv>
          <ContactForm />
        </ColumnDiv>
      </Section>
      <Section title="Contacts">
        {error && <b>{error}!!!</b>}
        {!error && (
          <>
            {contacts.length === 0 ? (
              <Notification message="No contacts in phonebook" />
            ) : (
              <>
                <ColumnDiv>
                  <Filter />
                  {isLoading && <Loader />}
                </ColumnDiv>
                <ContactList />
              </>
            )}
          </>
        )}{' '}
      </Section>
    </>
  );
};

export default App;
