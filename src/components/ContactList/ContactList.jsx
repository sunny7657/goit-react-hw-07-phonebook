import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';
// import { selectFilter } from '../../redux/filter-selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts-operations';
import { AppLoader } from '../Loader/Loader';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <AppLoader />}
      {error && <p>Error: {error}</p>}
      {Boolean(contacts.length) && (
        <ul>
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
};
