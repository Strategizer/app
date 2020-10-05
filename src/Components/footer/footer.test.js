import React from 'react';
import Footer from './Footer';
import { cleanup, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('footer', () => {

  afterEach(cleanup);

  const history = createMemoryHistory();

  const wrapped = (
    <Router history={history}>
      <Footer />
    </Router>
  );

  it('matches the snapshot', () => {
    const { asFragment } = render(wrapped);
    expect(asFragment()).toMatchSnapshot()
  }); 
  

  it('renders required links', () => {
    const { getByText } = render(wrapped);
    const contributorsLink = getByText(/contributors/);
    const repoLink = getByText(/Github Repository/);
    expect(repoLink).toBeTruthy(); 
    expect(contributorsLink).toBeTruthy(); 
  });

});
