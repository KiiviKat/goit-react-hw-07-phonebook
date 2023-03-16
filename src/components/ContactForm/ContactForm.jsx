import * as yup from 'yup';
import 'yup-phone';
import { Formik } from 'formik';
import { StyledForm, Label, Input, Error, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { toast } from 'react-hot-toast';
import { selectContacts } from 'redux/selectors';

let schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.string().phone().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.find(contact => contact.name === values.name)) {
      toast.error(`Sorry, ${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values));

    resetForm();

    toast.success('Contact successfully added!');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <Error component="div" name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <Error component="div" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
