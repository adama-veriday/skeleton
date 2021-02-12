import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'components/__mocks__/i18n';
import subMocks from 'components/__mocks__/subMocks';
import SubTable from 'components/SubTable';

describe('SubTable', () => {
  it('shows subs', () => {
    const { getByText } = render(<SubTable items={subMocks} />);
    expect(
      getByText(
        'Dolorem odit molestias veritatis dolor qui aut est est illum. Nulla perferendis officia veniam et. Aut ut neque voluptatum. Praesentium qui ullam consequatur quas modi. Sequi quam consequatur error mollitia quos.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Facere adipisci aperiam voluptatibus architecto. Et omnis harum nam in autem. Non aut et et. Sunt perferendis magnam facere et itaque minus id. Excepturi amet vero id quam ad quia aut eum.'
      )
    ).toBeInTheDocument();
  });

  it('shows no subs message', () => {
    const { queryByText } = render(<SubTable items={[]} />);
    expect(
      queryByText(
        'Dolorem odit molestias veritatis dolor qui aut est est illum. Nulla perferendis officia veniam et. Aut ut neque voluptatum. Praesentium qui ullam consequatur quas modi. Sequi quam consequatur error mollitia quos.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Facere adipisci aperiam voluptatibus architecto. Et omnis harum nam in autem. Non aut et et. Sunt perferendis magnam facere et itaque minus id. Excepturi amet vero id quam ad quia aut eum.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.sub.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(<SubTable items={subMocks} onSelect={onSelectMock} />);
    fireEvent.click(
      getByText(
        'Dolorem odit molestias veritatis dolor qui aut est est illum. Nulla perferendis officia veniam et. Aut ut neque voluptatum. Praesentium qui ullam consequatur quas modi. Sequi quam consequatur error mollitia quos.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
