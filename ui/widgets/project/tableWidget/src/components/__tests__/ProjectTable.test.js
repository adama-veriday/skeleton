import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'components/__mocks__/i18n';
import projectMocks from 'components/__mocks__/projectMocks';
import ProjectTable from 'components/ProjectTable';

describe('ProjectTable', () => {
  it('shows projects', () => {
    const { getByText } = render(<ProjectTable items={projectMocks} />);
    expect(
      getByText(
        'Aut assumenda aut sed atque quidem commodi. Praesentium alias asperiores magni suscipit omnis. Maxime rerum aut cupiditate est officiis beatae dolorum vitae. Dolor qui dicta facere et rerum sint. Laudantium autem perferendis quae quo praesentium et et et. Numquam molestias quia maiores quas eius aliquid sapiente consequatur.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Aut et aperiam nobis quam porro vero. Aperiam minima debitis hic eos impedit aliquam dolor. Aut temporibus amet id odit. Recusandae dolores libero molestiae. Veniam sit maxime iure facere veritatis quas rerum.'
      )
    ).toBeInTheDocument();
  });

  it('shows no projects message', () => {
    const { queryByText } = render(<ProjectTable items={[]} />);
    expect(
      queryByText(
        'Aut assumenda aut sed atque quidem commodi. Praesentium alias asperiores magni suscipit omnis. Maxime rerum aut cupiditate est officiis beatae dolorum vitae. Dolor qui dicta facere et rerum sint. Laudantium autem perferendis quae quo praesentium et et et. Numquam molestias quia maiores quas eius aliquid sapiente consequatur.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Aut et aperiam nobis quam porro vero. Aperiam minima debitis hic eos impedit aliquam dolor. Aut temporibus amet id odit. Recusandae dolores libero molestiae. Veniam sit maxime iure facere veritatis quas rerum.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.project.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(<ProjectTable items={projectMocks} onSelect={onSelectMock} />);
    fireEvent.click(
      getByText(
        'Aut assumenda aut sed atque quidem commodi. Praesentium alias asperiores magni suscipit omnis. Maxime rerum aut cupiditate est officiis beatae dolorum vitae. Dolor qui dicta facere et rerum sint. Laudantium autem perferendis quae quo praesentium et et et. Numquam molestias quia maiores quas eius aliquid sapiente consequatur.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
