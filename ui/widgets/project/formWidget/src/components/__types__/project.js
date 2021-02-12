import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,

  name: PropTypes.string,
  partner_id: PropTypes.number,
  customer_id: PropTypes.number,
  procurment_officer_name: PropTypes.string,
  procurment_contact_no: PropTypes.number,
  tickets: PropTypes.string,
  subscriptions: PropTypes.string,
});

export const formValues = PropTypes.shape({
  name: PropTypes.string,
  partner_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  customer_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  procurment_officer_name: PropTypes.string,
  procurment_contact_no: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tickets: PropTypes.string,
  subscriptions: PropTypes.string,
});

export const formTouched = PropTypes.shape({
  name: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  partner_id: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  customer_id: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  procurment_officer_name: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  procurment_contact_no: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  tickets: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  subscriptions: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
});

export const formErrors = PropTypes.shape({
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  partner_id: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  customer_id: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  procurment_officer_name: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  procurment_contact_no: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  tickets: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  subscriptions: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
});
