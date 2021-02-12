import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { apiSubGet, apiSubPut } from 'api/subs';
import SubEditFormContainer from 'components/SubEditFormContainer';
import 'i18n/__mocks__/i18nMock';
import subMock from 'components/__mocks__/subMocks';

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

describe('SubEditFormContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const errorMessageKey = 'error.dataLoading';
  const successMessageKey = 'common.dataSaved';

  const onErrorMock = jest.fn();
  const onUpdateMock = jest.fn();

  it('loads data', async () => {
    apiSubGet.mockImplementation(() => Promise.resolve(subMock));
    const { queryByText } = render(
      <SubEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    await wait(() => {
      expect(apiSubGet).toHaveBeenCalledTimes(1);
      expect(apiSubGet).toHaveBeenCalledWith('', '1');
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
      expect(onErrorMock).toHaveBeenCalledTimes(0);
    });
  }, 7000);

  it('saves data', async () => {
    apiSubGet.mockImplementation(() => Promise.resolve(subMock));
    apiSubPut.mockImplementation(() => Promise.resolve(subMock));

    const { findByTestId, queryByText } = render(
      <SubEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiSubPut).toHaveBeenCalledTimes(1);
      expect(apiSubPut).toHaveBeenCalledWith('', subMock);
      expect(queryByText(successMessageKey)).toBeInTheDocument();
      expect(onErrorMock).toHaveBeenCalledTimes(0);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  }, 7000);

  it('shows an error if data is not successfully loaded', async () => {
    apiSubGet.mockImplementation(() => Promise.reject());
    const { queryByText } = render(
      <SubEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    await wait(() => {
      expect(apiSubGet).toHaveBeenCalledTimes(1);
      expect(apiSubGet).toHaveBeenCalledWith('', '1');
      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).toBeInTheDocument();
      expect(queryByText(successMessageKey)).not.toBeInTheDocument();
    });
  }, 7000);

  it('shows an error if data is not successfully saved', async () => {
    apiSubGet.mockImplementation(() => Promise.resolve(subMock));
    apiSubPut.mockImplementation(() => Promise.reject());
    const { findByTestId, getByText } = render(
      <SubEditFormContainer id="1" onError={onErrorMock} />
    );

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiSubGet).toHaveBeenCalledTimes(1);
      expect(apiSubGet).toHaveBeenCalledWith('', '1');

      expect(apiSubPut).toHaveBeenCalledTimes(1);
      expect(apiSubPut).toHaveBeenCalledWith('', subMock);

      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(getByText(errorMessageKey)).toBeInTheDocument();
    });
  }, 7000);
});
