import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';

describe('App', () => {
    
  const history = createMemoryHistory();

  const wrapped = (
    <Router history={history}>
      <App />
    </Router>
  );

  test('renders strategizer', () => {
    const { getByText } = render(wrapped);
    const linkElement = getByText(/strategizer/i);
    expect(linkElement).toBeInTheDocument();
  });
});
