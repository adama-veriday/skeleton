import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,

  status: PropTypes.string,
  description: PropTypes.string,
});

export const formValues = PropTypes.shape({
  status: PropTypes.string,
  description: PropTypes.string,
});

export const formTouched = PropTypes.shape({
  status: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  description: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
});

export const formErrors = PropTypes.shape({
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
});
