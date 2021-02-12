import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import subType from 'components/__types__/sub';

const SubFieldTable = ({ t, i18n: { language }, sub }) => (
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
          <span>{t('entities.sub.id')}</span>
        </TableCell>
        <TableCell>
          <span>{sub.id}</span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <span>{t('entities.sub.level')}</span>
        </TableCell>
        <TableCell>
          <span>{sub.level}</span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <span>{t('entities.sub.length')}</span>
        </TableCell>
        <TableCell>
          <span>{sub.length}</span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <span>{t('entities.sub.status')}</span>
        </TableCell>
        <TableCell>
          <span>{sub.status}</span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <span>{t('entities.sub.project_id')}</span>
        </TableCell>
        <TableCell>
          <span>{sub.project_id}</span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <span>{t('entities.sub.start_date')}</span>
        </TableCell>
        <TableCell>
          <span>{sub.start_date && new Date(sub.start_date).toLocaleDateString(language)}</span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <span>{t('entities.sub.customer_id')}</span>
        </TableCell>
        <TableCell>
          <span>{sub.customer_id}</span>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

SubFieldTable.propTypes = {
  sub: subType,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    language: PropTypes.string,
  }).isRequired,
};

SubFieldTable.defaultProps = {
  sub: [],
};

export default withTranslation()(SubFieldTable);
