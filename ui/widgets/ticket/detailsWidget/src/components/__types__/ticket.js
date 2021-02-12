import PropTypes from 'prop-types';

const ticketType = PropTypes.shape({
  id: PropTypes.number,

  status: PropTypes.string,
  description: PropTypes.string,
});

export default ticketType;
