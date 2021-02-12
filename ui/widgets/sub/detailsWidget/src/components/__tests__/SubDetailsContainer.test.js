import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import 'components/__mocks__/i18n';
import { apiSubGet } from 'api/sub';
import subApiGetResponseMock from 'components/__mocks__/subMocks';
import SubDetailsContainer from 'components/SubDetailsContainer';

jest.mock('api/sub');

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

beforeEach(() => {
  apiSubGet.mockClear();
});

describe('SubDetailsContainer component', () => {
  test('requests data when component is mounted', async () => {
    apiSubGet.mockImplementation(() => Promise.resolve(subApiGetResponseMock));

    render(<SubDetailsContainer id="1" />);

    await wait(() => {
      expect(apiSubGet).toHaveBeenCalledTimes(1);
    });
  });

  test('data is shown after mount API call', async () => {
    apiSubGet.mockImplementation(() => Promise.resolve(subApiGetResponseMock));

    const { getByText } = render(<SubDetailsContainer id="1" />);

    await wait(() => {
      expect(apiSubGet).toHaveBeenCalledTimes(1);
      expect(getByText('entities.sub.level')).toBeInTheDocument();
      expect(getByText('entities.sub.length')).toBeInTheDocument();
      expect(getByText('entities.sub.status')).toBeInTheDocument();
      expect(getByText('entities.sub.project_id')).toBeInTheDocument();
      expect(getByText('entities.sub.start_date')).toBeInTheDocument();
      expect(getByText('entities.sub.customer_id')).toBeInTheDocument();
    });
  });

  test('error is shown after failed API call', async () => {
    const onErrorMock = jest.fn();
    apiSubGet.mockImplementation(() => Promise.reject());

    const { getByText } = render(<SubDetailsContainer id="1" onError={onErrorMock} />);

    await wait(() => {
      expect(apiSubGet).toHaveBeenCalledTimes(1);
      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(getByText('common.couldNotFetchData')).toBeInTheDocument();
    });
  });
});
