import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,

  name: PropTypes.string,
  customers: PropTypes.string,
});

export const formValues = PropTypes.shape({
  name: PropTypes.string,
  customers: PropTypes.string,
});

export const formTouched = PropTypes.shape({
  name: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  customers: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
});

export const formErrors = PropTypes.shape({
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  customers: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
});
