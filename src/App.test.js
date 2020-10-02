import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders strategizer', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/strategizer/i);
  expect(linkElement).toBeInTheDocument();
});
