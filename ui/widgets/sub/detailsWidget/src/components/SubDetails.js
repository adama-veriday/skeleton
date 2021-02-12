import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';

import subType from 'components/__types__/sub';
import SubFieldTable from 'components/sub-field-table/SubFieldTable';

const SubDetails = ({ t, sub }) => {
  return (
    <Box>
      <h3>
        {t('common.widgetName', {
          widgetNamePlaceholder: 'Sub',
        })}
      </h3>
      <SubFieldTable sub={sub} />
    </Box>
  );
};

SubDetails.propTypes = {
  sub: subType,
  t: PropTypes.func.isRequired,
};

SubDetails.defaultProps = {
  sub: {},
};

export default withTranslation()(SubDetails);
