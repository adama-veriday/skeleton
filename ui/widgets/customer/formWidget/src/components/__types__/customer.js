import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,

  name: PropTypes.string,
  partner_id: PropTypes.number,
  products: PropTypes.string,
});

export const formValues = PropTypes.shape({
  name: PropTypes.string,
  partner_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  products: PropTypes.string,
});

export const formTouched = PropTypes.shape({
  name: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  partner_id: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  products: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
});

export const formErrors = PropTypes.shape({
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  partner_id: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  products: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
});
