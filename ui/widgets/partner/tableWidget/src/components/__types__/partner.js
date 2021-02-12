import PropTypes from 'prop-types';

const partnerType = PropTypes.shape({
  id: PropTypes.number,

  name: PropTypes.string,
  customers: PropTypes.string,
});

export default partnerType;
