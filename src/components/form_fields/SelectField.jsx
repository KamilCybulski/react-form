import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({
  input, label, options, map,
}) => (
  <div className="selectfield">
    <div className="selectfield__controls">
      <span className="selectfield__label">{label}</span>
    </div>
    <select
      {...input}
      className="selectfield__input"
    >
      {options.map(map)}
    </select>
    <span className="selectfield__underline" />
  </div>
);

SelectField.defaultProps = {
  label: '',
};

SelectField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  map: PropTypes.func.isRequired,
};

export default SelectField;
