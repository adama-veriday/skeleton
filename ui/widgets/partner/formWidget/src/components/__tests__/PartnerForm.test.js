import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, wait } from '@testing-library/react';
import 'i18n/__mocks__/i18nMock';
import partnerMock from 'components/__mocks__/partnerMocks';
import PartnerForm from 'components/PartnerForm';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme();

describe('Partner Form', () => {
  it('shows form', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <PartnerForm partner={partnerMock} />
      </ThemeProvider>
    );
    expect(getByLabelText('entities.partner.name').value).toBe(
      'Culpa veniam assumenda animi atque animi. Quisquam ut consequatur non incidunt. Officiis voluptas repellendus similique nulla tempore voluptatibus quia. Ut quo inventore eaque ut.'
    );
  });

  it('submits form', async () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <PartnerForm partner={partnerMock} onSubmit={handleSubmit} />
      </ThemeProvider>
    );

    const form = getByTestId('partner-form');
    fireEvent.submit(form);

    await wait(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
