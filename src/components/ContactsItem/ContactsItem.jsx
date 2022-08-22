import PropTypes from 'prop-types';

import { Button, ContactsElement, Span } from '../ContactsItem/ContactsItem.styled';

export const ContactsItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <ContactsElement>
      <Span>{name}:</Span>
      <Span>{number}</Span>
      <Button type="button"
        id={id}
        onClick={event => {
          onDelete(event.target.id)
        }}
      >
        Delete
      </Button>
    </ContactsElement>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
}
