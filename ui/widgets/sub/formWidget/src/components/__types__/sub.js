import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,

  level: PropTypes.string,
  length: PropTypes.string,
  status: PropTypes.string,
  project_id: PropTypes.number,
  start_date: PropTypes.string,
  customer_id: PropTypes.number,
});

export const formValues = PropTypes.shape({
  level: PropTypes.string,
  length: PropTypes.string,
  status: PropTypes.string,
  project_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  start_date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  customer_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

export const formTouched = PropTypes.shape({
  level: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  length: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  status: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  project_id: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  start_date: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  customer_id: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
});

export const formErrors = PropTypes.shape({
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  project_id: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  start_date: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  customer_id: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
});
