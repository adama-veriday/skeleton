import PropTypes from 'prop-types';

const subType = PropTypes.shape({
  id: PropTypes.number,

  level: PropTypes.string,
  length: PropTypes.string,
  status: PropTypes.string,
  project_id: PropTypes.number,
  start_date: PropTypes.string,
  customer_id: PropTypes.number,
});

export default subType;
