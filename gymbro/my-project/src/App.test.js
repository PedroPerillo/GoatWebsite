import { render, screen } from '@testing-library/react';
import StripeApp from './StripeApp';

test('renders learn react link', () => {
  render(<StripeApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
