import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, wait } from '@testing-library/react';
import 'i18n/__mocks__/i18nMock';
import subMock from 'components/__mocks__/subMocks';
import SubForm from 'components/SubForm';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme();

describe('Sub Form', () => {
  it('shows form', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <SubForm sub={subMock} />
      </ThemeProvider>
    );
    expect(getByLabelText('entities.sub.level').value).toBe(
      'Dolorem odit molestias veritatis dolor qui aut est est illum. Nulla perferendis officia veniam et. Aut ut neque voluptatum. Praesentium qui ullam consequatur quas modi. Sequi quam consequatur error mollitia quos.'
    );
  });

  it('submits form', async () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SubForm sub={subMock} onSubmit={handleSubmit} />
      </ThemeProvider>
    );

    const form = getByTestId('sub-form');
    fireEvent.submit(form);

    await wait(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
