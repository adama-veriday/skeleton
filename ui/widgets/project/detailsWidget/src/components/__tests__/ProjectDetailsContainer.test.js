import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import 'components/__mocks__/i18n';
import { apiProjectGet } from 'api/project';
import projectApiGetResponseMock from 'components/__mocks__/projectMocks';
import ProjectDetailsContainer from 'components/ProjectDetailsContainer';

jest.mock('api/project');

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
  apiProjectGet.mockClear();
});

describe('ProjectDetailsContainer component', () => {
  test('requests data when component is mounted', async () => {
    apiProjectGet.mockImplementation(() => Promise.resolve(projectApiGetResponseMock));

    render(<ProjectDetailsContainer id="1" />);

    await wait(() => {
      expect(apiProjectGet).toHaveBeenCalledTimes(1);
    });
  });

  test('data is shown after mount API call', async () => {
    apiProjectGet.mockImplementation(() => Promise.resolve(projectApiGetResponseMock));

    const { getByText } = render(<ProjectDetailsContainer id="1" />);

    await wait(() => {
      expect(apiProjectGet).toHaveBeenCalledTimes(1);
      expect(getByText('entities.project.name')).toBeInTheDocument();
      expect(getByText('entities.project.partner_id')).toBeInTheDocument();
      expect(getByText('entities.project.customer_id')).toBeInTheDocument();
      expect(getByText('entities.project.procurment_officer_name')).toBeInTheDocument();
      expect(getByText('entities.project.procurment_contact_no')).toBeInTheDocument();
      expect(getByText('entities.project.tickets')).toBeInTheDocument();
      expect(getByText('entities.project.subscriptions')).toBeInTheDocument();
    });
  });

  test('error is shown after failed API call', async () => {
    const onErrorMock = jest.fn();
    apiProjectGet.mockImplementation(() => Promise.reject());

    const { getByText } = render(<ProjectDetailsContainer id="1" onError={onErrorMock} />);

    await wait(() => {
      expect(apiProjectGet).toHaveBeenCalledTimes(1);
      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(getByText('common.couldNotFetchData')).toBeInTheDocument();
    });
  });
});
