import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, wait } from '@testing-library/react';
import 'i18n/__mocks__/i18nMock';
import ticketMock from 'components/__mocks__/ticketMocks';
import TicketForm from 'components/TicketForm';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme();

describe('Ticket Form', () => {
  it('shows form', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <TicketForm ticket={ticketMock} />
      </ThemeProvider>
    );
    expect(getByLabelText('entities.ticket.status').value).toBe(
      'Autem velit rerum est aperiam temporibus. Id ut eveniet eos. Debitis provident provident sed fugit. Earum expedita est eum. Natus non laboriosam eligendi. Quis nemo nostrum sit id dignissimos delectus dolores odit.'
    );
  });

  it('submits form', async () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TicketForm ticket={ticketMock} onSubmit={handleSubmit} />
      </ThemeProvider>
    );

    const form = getByTestId('ticket-form');
    fireEvent.submit(form);

    await wait(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
