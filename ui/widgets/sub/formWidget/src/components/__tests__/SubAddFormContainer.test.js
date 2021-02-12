import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { apiSubPost } from 'api/subs';
import SubAddFormContainer from 'components/SubAddFormContainer';
import 'i18n/__mocks__/i18nMock';
import subMock from 'components/__mocks__/subMocks';

jest.mock('api/subs');
jest.mock('@material-ui/pickers', () => {
  // eslint-disable-next-line react/prop-types
  const MockPicker = ({ id, value, name, label, onChange }) => {
    const handleChange = (event) => onChange(event.currentTarget.value);
    return (
      <span>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={name} value={value || ''} onChange={handleChange} />
      </span>
    );
  };
  return {
    ...jest.requireActual('@material-ui/pickers'),
    DateTimePicker: MockPicker,
    DatePicker: MockPicker,
  };
});

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

describe('SubAddFormContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const errorMessageKey = 'error.dataLoading';
  const successMessageKey = 'common.dataSaved';

  const onErrorMock = jest.fn();
  const onCreateMock = jest.fn();

  it('saves data', async () => {
    apiSubPost.mockImplementation((data) => Promise.resolve(data));

    const { findByTestId, findByLabelText, queryByText, rerender } = render(
      <SubAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />
    );

    const levelField = await findByLabelText('entities.sub.level');
    fireEvent.change(levelField, { target: { value: subMock.level } });
    const lengthField = await findByLabelText('entities.sub.length');
    fireEvent.change(lengthField, { target: { value: subMock.length } });
    const statusField = await findByLabelText('entities.sub.status');
    fireEvent.change(statusField, { target: { value: subMock.status } });
    const project_idField = await findByLabelText('entities.sub.project_id');
    fireEvent.change(project_idField, { target: { value: subMock.project_id } });
    const start_dateField = await findByLabelText('entities.sub.start_date');
    fireEvent.change(start_dateField, { target: { value: subMock.start_date } });
    const customer_idField = await findByLabelText('entities.sub.customer_id');
    fireEvent.change(customer_idField, { target: { value: subMock.customer_id } });
    rerender(<SubAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />);

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiSubPost).toHaveBeenCalledTimes(1);
      expect(apiSubPost).toHaveBeenCalledWith('', subMock);

      expect(queryByText(successMessageKey)).toBeInTheDocument();

      expect(onErrorMock).toHaveBeenCalledTimes(0);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  }, 7000);

  it('shows an error if data is not successfully saved', async () => {
    apiSubPost.mockImplementation(() => Promise.reject());

    const { findByTestId, findByLabelText, queryByText, rerender } = render(
      <SubAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />
    );

    const levelField = await findByLabelText('entities.sub.level');
    fireEvent.change(levelField, { target: { value: subMock.level } });
    const lengthField = await findByLabelText('entities.sub.length');
    fireEvent.change(lengthField, { target: { value: subMock.length } });
    const statusField = await findByLabelText('entities.sub.status');
    fireEvent.change(statusField, { target: { value: subMock.status } });
    const project_idField = await findByLabelText('entities.sub.project_id');
    fireEvent.change(project_idField, { target: { value: subMock.project_id } });
    const start_dateField = await findByLabelText('entities.sub.start_date');
    fireEvent.change(start_dateField, { target: { value: subMock.start_date } });
    const customer_idField = await findByLabelText('entities.sub.customer_id');
    fireEvent.change(customer_idField, { target: { value: subMock.customer_id } });
    rerender(<SubAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />);

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiSubPost).toHaveBeenCalledTimes(1);
      expect(apiSubPost).toHaveBeenCalledWith('', subMock);

      expect(queryByText(successMessageKey)).not.toBeInTheDocument();

      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).toBeInTheDocument();
    });
  }, 7000);
});
