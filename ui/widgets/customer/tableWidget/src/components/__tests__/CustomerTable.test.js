import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'components/__mocks__/i18n';
import customerMocks from 'components/__mocks__/customerMocks';
import CustomerTable from 'components/CustomerTable';

describe('CustomerTable', () => {
  it('shows customers', () => {
    const { getByText } = render(<CustomerTable items={customerMocks} />);
    expect(
      getByText(
        'Non quo quaerat cum qui. Non reprehenderit voluptate exercitationem enim voluptatum ullam eveniet. Dolorum dolorem beatae nulla consequatur magni et rerum expedita repellendus.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Expedita illo consectetur saepe. Necessitatibus officia voluptate sequi magnam quia ullam molestias in. Quidem dicta iure qui sunt. Commodi nihil est suscipit maxime ut.'
      )
    ).toBeInTheDocument();
  });

  it('shows no customers message', () => {
    const { queryByText } = render(<CustomerTable items={[]} />);
    expect(
      queryByText(
        'Non quo quaerat cum qui. Non reprehenderit voluptate exercitationem enim voluptatum ullam eveniet. Dolorum dolorem beatae nulla consequatur magni et rerum expedita repellendus.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Expedita illo consectetur saepe. Necessitatibus officia voluptate sequi magnam quia ullam molestias in. Quidem dicta iure qui sunt. Commodi nihil est suscipit maxime ut.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.customer.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(<CustomerTable items={customerMocks} onSelect={onSelectMock} />);
    fireEvent.click(
      getByText(
        'Non quo quaerat cum qui. Non reprehenderit voluptate exercitationem enim voluptatum ullam eveniet. Dolorum dolorem beatae nulla consequatur magni et rerum expedita repellendus.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
