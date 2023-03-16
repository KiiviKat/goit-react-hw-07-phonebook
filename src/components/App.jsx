import { Container } from './Container/Container.styled';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Toaster } from 'react-hot-toast';

const TITLES = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

export const App = () => {
  return (
    <Container>
      <Toaster position="top-left" />
      <Title title={TITLES.form} />
      <ContactForm />
      <Title title={TITLES.contacts} />
      <Filter />
      <ContactList />
    </Container>
  );
};
