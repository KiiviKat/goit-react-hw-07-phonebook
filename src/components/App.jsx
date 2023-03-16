import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { Container } from './Container/Container.styled';

const TITLES = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Toaster position="top-left" />
      <Title title={TITLES.form} />
      <ContactForm />
      <Title title={TITLES.contacts} />
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Container>
  );
};
