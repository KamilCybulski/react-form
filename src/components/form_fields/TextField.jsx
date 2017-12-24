import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ input, meta, label }) => (
  <div className="textfield">
    <div className="textfield__controls">
      <span className="textfield__label">{label}</span>
      <span className="textfield__error">{meta.error}</span>
    </div>
    <input {...input} type="text" className="textfield__input" />
    <span className={`${meta.error ? 'textfield__underline_error' : 'textfield__underline'}`} />
  </div>
);

TextField.defaultProps = {
  label: '',
};

TextField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  label: PropTypes.string,
};

export default TextField;
