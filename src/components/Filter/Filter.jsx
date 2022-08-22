import PropTypes from 'prop-types';

import { Container, Label, Input } from './Filter.styled';

export const Filter = ({ title, value, onChange }) => {
  return (
    <Container>
    <Label>
      <span>{title}</span>
      <Input type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
      </Label>
      </Container>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
