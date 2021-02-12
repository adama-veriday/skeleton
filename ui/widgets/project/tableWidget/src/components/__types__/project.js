import PropTypes from 'prop-types';

const projectType = PropTypes.shape({
  id: PropTypes.number,

  name: PropTypes.string,
  partner_id: PropTypes.number,
  customer_id: PropTypes.number,
  procurment_officer_name: PropTypes.string,
  procurment_contact_no: PropTypes.number,
  tickets: PropTypes.string,
  subscriptions: PropTypes.string,
});

export default projectType;
