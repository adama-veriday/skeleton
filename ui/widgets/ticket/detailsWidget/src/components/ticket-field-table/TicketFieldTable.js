import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ticketType from 'components/__types__/ticket';

const TicketFieldTable = ({ t, ticket }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>{t('common.name')}</TableCell>
        <TableCell>{t('common.value')}</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <span>{t('entities.ticket.id')}</span>
        </TableCell>
        <TableCell>
          <span>{ticket.id}</span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <span>{t('entities.ticket.status')}</span>
        </TableCell>
        <TableCell>
          <span>{ticket.status}</span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <span>{t('entities.ticket.description')}</span>
        </TableCell>
        <TableCell>
          <span>{ticket.description}</span>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

TicketFieldTable.propTypes = {
  ticket: ticketType,
  t: PropTypes.func.isRequired,
};

TicketFieldTable.defaultProps = {
  ticket: [],
};

export default withTranslation()(TicketFieldTable);
