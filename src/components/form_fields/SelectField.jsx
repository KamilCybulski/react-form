/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

class SelectField extends React.Component {
  /**
   * This is basically a hack that allows click event on dropdown items to be
   * registered before the dropdown is hidden
   */
  componentDidUpdate = (prevProps) => {
    const wasActive = prevProps.meta.active;
    const isActive = this.props.meta.active;

    if (wasActive && !isActive) {
      setTimeout(() => {
        this.dropdown.classList.remove('selectfield__dropdown_active');
      }, 100);
    } else if (isActive && !wasActive) {
      this.dropdown.classList.add('selectfield__dropdown_active');
    }
  }

  handleDropdownRef = (ref) => {
    this.dropdown = ref;
  }

  render() {
    const {
      input, meta, label, options, underline, inputCustomClass, wrapperCustomClass, top,
    } = this.props;

    return (
      <div className={wrapperCustomClass || 'selectfield'}>
        {label &&
          <div className="selectfield__controls">
            <span>{label}</span>
          </div>}
        <input
          {...input}
          readOnly
          type="text"
          className={inputCustomClass || 'selectfield__input'}
        />
        {underline &&
          <span
            className={meta.active ? 'selectfield__underline_active' : 'selectfield__underline'}
          />}
        <div
          ref={this.handleDropdownRef}
          className={`selectfield__dropdown
          ${top ? ' selectfield__dropdown_top' : ''}`}
        >
          <ul className="selectfield__list">
            {options.map(opt => (
              <li
                key={opt}
                role="menuitem"
                className="selectfield__option"
                onClick={() => { input.onChange(opt); }}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

SelectField.defaultProps = {
  label: '',
  underline: false,
  inputCustomClass: '',
  wrapperCustomClass: '',
  top: false,
};

SelectField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    active: PropTypes.bool.isRequired,
  }).isRequired,
  label: PropTypes.string,
  options: PropTypes.any.isRequired,
  underline: PropTypes.bool,
  inputCustomClass: PropTypes.string,
  wrapperCustomClass: PropTypes.string,
  top: PropTypes.bool,
};

export default SelectField;
