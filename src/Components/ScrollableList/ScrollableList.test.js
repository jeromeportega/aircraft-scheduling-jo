import { render, screen } from '@testing-library/react';

import ScrollableList from './index';

it('renders scrollable list with two items', () => {
  render(<ScrollableList itemType='aircraft' items={[{}, {}]} />);
  expect(screen.getAllByText(/Aircraft/i)).toHaveLength(2);
});
