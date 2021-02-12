import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'components/__mocks__/i18n';
import ticketMocks from 'components/__mocks__/ticketMocks';
import TicketTable from 'components/TicketTable';

describe('TicketTable', () => {
  it('shows tickets', () => {
    const { getByText } = render(<TicketTable items={ticketMocks} />);
    expect(
      getByText(
        'Autem velit rerum est aperiam temporibus. Id ut eveniet eos. Debitis provident provident sed fugit. Earum expedita est eum. Natus non laboriosam eligendi. Quis nemo nostrum sit id dignissimos delectus dolores odit.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Delectus aut nam qui est magnam nisi. Repellendus consequatur quia voluptatibus quam tempora. Consequatur ut consequatur. Ut dolorem officia nihil rem eum. Et at similique aut facere.'
      )
    ).toBeInTheDocument();
  });

  it('shows no tickets message', () => {
    const { queryByText } = render(<TicketTable items={[]} />);
    expect(
      queryByText(
        'Autem velit rerum est aperiam temporibus. Id ut eveniet eos. Debitis provident provident sed fugit. Earum expedita est eum. Natus non laboriosam eligendi. Quis nemo nostrum sit id dignissimos delectus dolores odit.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Delectus aut nam qui est magnam nisi. Repellendus consequatur quia voluptatibus quam tempora. Consequatur ut consequatur. Ut dolorem officia nihil rem eum. Et at similique aut facere.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.ticket.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(<TicketTable items={ticketMocks} onSelect={onSelectMock} />);
    fireEvent.click(
      getByText(
        'Autem velit rerum est aperiam temporibus. Id ut eveniet eos. Debitis provident provident sed fugit. Earum expedita est eum. Natus non laboriosam eligendi. Quis nemo nostrum sit id dignissimos delectus dolores odit.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
