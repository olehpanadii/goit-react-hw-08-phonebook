import { Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { FaRegIdCard } from 'react-icons/fa';
import * as Yup from 'yup';
import { Button, StyledForm } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  phone: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Invalid phone number. Please enter a valid phone number in the format XXX-XX-XX.'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    const isContactDublicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isContactDublicate) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <label>Name </label>
          <Field name="name" type="text" placeholder="Name Surname" />
          <ErrorMessage component="div" name="name" />

          <label>Number</label>
          <Field name="number" type="tel" placeholder="000-00-00" />
          <ErrorMessage component="div" name="phone" />

          <Button type="submit">
            <span>Add contact</span> <FaRegIdCard />
          </Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
