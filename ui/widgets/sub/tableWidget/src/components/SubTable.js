import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import subType from 'components/__types__/sub';

const styles = {
  tableRoot: {
    marginTop: '10px',
  },
  rowRoot: {
    cursor: 'pointer',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  noItems: {
    margin: '15px',
  },
};

const SubTable = ({ items, onSelect, classes, t, i18n, Actions }) => {
  const tableRows = items.map((item) => (
    <TableRow hover className={classes.rowRoot} key={item.id} onClick={() => onSelect(item)}>
      <TableCell>
        <span>{item.level}</span>
      </TableCell>
      <TableCell>
        <span>{item.length}</span>
      </TableCell>
      <TableCell>
        <span>{item.status}</span>
      </TableCell>
      <TableCell>
        <span>{item.project_id}</span>
      </TableCell>
      <TableCell>
        <span>{new Date(item.start_date).toLocaleDateString(i18n.language)}</span>
      </TableCell>
      <TableCell>
        <span>{item.customer_id}</span>
      </TableCell>
      {Actions && (
        <TableCell>
          <Actions item={item} />
        </TableCell>
      )}
    </TableRow>
  ));

  return items.length ? (
    <Table className={classes.tableRoot} stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>
            <span>{t('entities.sub.level')}</span>
          </TableCell>
          <TableCell>
            <span>{t('entities.sub.length')}</span>
          </TableCell>
          <TableCell>
            <span>{t('entities.sub.status')}</span>
          </TableCell>
          <TableCell>
            <span>{t('entities.sub.project_id')}</span>
          </TableCell>
          <TableCell>
            <span>{t('entities.sub.start_date')}</span>
          </TableCell>
          <TableCell>
            <span>{t('entities.sub.customer_id')}</span>
          </TableCell>
          {Actions && <TableCell />}
        </TableRow>
      </TableHead>
      <TableBody>{tableRows}</TableBody>
    </Table>
  ) : (
    <div className={classes.noItems}>{t('entities.sub.noItems')}</div>
  );
};

SubTable.propTypes = {
  items: PropTypes.arrayOf(subType).isRequired,
  onSelect: PropTypes.func,
  classes: PropTypes.shape({
    rowRoot: PropTypes.string,
    tableRoot: PropTypes.string,
    noItems: PropTypes.string,
  }).isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({ language: PropTypes.string }).isRequired,
  Actions: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

SubTable.defaultProps = {
  onSelect: () => {},
  Actions: null,
};

export default withStyles(styles)(withTranslation()(SubTable));
