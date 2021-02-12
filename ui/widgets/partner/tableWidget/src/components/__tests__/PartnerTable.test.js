import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'components/__mocks__/i18n';
import partnerMocks from 'components/__mocks__/partnerMocks';
import PartnerTable from 'components/PartnerTable';

describe('PartnerTable', () => {
  it('shows partners', () => {
    const { getByText } = render(<PartnerTable items={partnerMocks} />);
    expect(
      getByText(
        'Culpa veniam assumenda animi atque animi. Quisquam ut consequatur non incidunt. Officiis voluptas repellendus similique nulla tempore voluptatibus quia. Ut quo inventore eaque ut.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Repudiandae aut est incidunt. Quas voluptatem tempore. Molestias corrupti aut placeat. Quisquam soluta et ullam ut illo porro aut aperiam eum.'
      )
    ).toBeInTheDocument();
  });

  it('shows no partners message', () => {
    const { queryByText } = render(<PartnerTable items={[]} />);
    expect(
      queryByText(
        'Culpa veniam assumenda animi atque animi. Quisquam ut consequatur non incidunt. Officiis voluptas repellendus similique nulla tempore voluptatibus quia. Ut quo inventore eaque ut.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Repudiandae aut est incidunt. Quas voluptatem tempore. Molestias corrupti aut placeat. Quisquam soluta et ullam ut illo porro aut aperiam eum.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.partner.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(<PartnerTable items={partnerMocks} onSelect={onSelectMock} />);
    fireEvent.click(
      getByText(
        'Culpa veniam assumenda animi atque animi. Quisquam ut consequatur non incidunt. Officiis voluptas repellendus similique nulla tempore voluptatibus quia. Ut quo inventore eaque ut.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
