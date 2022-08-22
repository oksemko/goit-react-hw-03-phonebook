import PropTypes from 'prop-types';

import { ContactsItem } from '../ContactsItem/ContactsItem';
import { List } from './ContactsList.styled';


export const ContactsList = ({ filteredContacts, onDelete }) => {
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactsItem
            contact={{ id, name, number }}
            key={id}
            onDelete={onDelete}
          />
        );
      })}
    </List>
  );
}

ContactsItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
}
