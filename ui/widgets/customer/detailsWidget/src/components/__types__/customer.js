import PropTypes from 'prop-types';

const customerType = PropTypes.shape({
  id: PropTypes.number,

  name: PropTypes.string,
  partner_id: PropTypes.number,
  products: PropTypes.string,
});

export default customerType;
