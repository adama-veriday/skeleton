import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import subMocks from 'components/__mocks__/subMocks';
import { apiSubsGet } from 'api/subs';
import 'i18n/__mocks__/i18nMock';
import SubTableContainer from 'components/SubTableContainer';

jest.mock('api/subs');

jest.mock('auth/withKeycloak', () => {
  const withKeycloak = (Component) => {
    return (props) => (
      <Component
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        keycloak={{
          initialized: true,
          authenticated: true,
        }}
      />
    );
  };

  return withKeycloak;
});

jest.mock('components/pagination/withPagination', () => {
  const withPagination = (Component) => {
    return (props) => (
      <Component
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        pagination={{
          onChangeItemsPerPage: () => {},
          onChangeCurrentPage: () => {},
        }}
      />
    );
  };

  return withPagination;
});

describe('SubTableContainer', () => {
  const errorMessageKey = 'error.dataLoading';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls API', async () => {
    apiSubsGet.mockImplementation(() => Promise.resolve({ subs: subMocks, count: 2 }));
    const { queryByText } = render(<SubTableContainer />);

    await wait(() => {
      expect(apiSubsGet).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  });

  it('shows an error if the API call is not successful', async () => {
    apiSubsGet.mockImplementation(() => {
      throw new Error();
    });
    const { getByText } = render(<SubTableContainer />);

    wait(() => {
      expect(apiSubsGet).toHaveBeenCalledTimes(1);
      expect(getByText(errorMessageKey)).toBeInTheDocument();
    });
  });
});
