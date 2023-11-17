import { FaPhoneAlt, FaUserTimes } from 'react-icons/fa';
import { ContactItem, ContactNumber, DeleteBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <h3>{name}</h3>
          <ContactNumber>
            <p>
              <FaPhoneAlt /> {number}
            </p>
            <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
              Delete <FaUserTimes />
            </DeleteBtn>
          </ContactNumber>
        </ContactItem>
      ))}
    </ul>
  );
};
