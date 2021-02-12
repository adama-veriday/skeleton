import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import 'components/__mocks__/i18n';
import SubDetails from 'components/SubDetails';
import subMock from 'components/__mocks__/subMocks';

describe('SubDetails component', () => {
  test('renders data in details widget', () => {
    const { getByText } = render(<SubDetails sub={subMock} />);

    expect(getByText('entities.sub.level')).toBeInTheDocument();
  });
});
