import React from 'react';
import PropTypes from 'prop-types';

const FormDescription = ({ text }) => (
  <p className="form__description">
    {text}
  </p>
);

FormDescription.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormDescription;
