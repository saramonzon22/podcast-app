import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  it('renders the header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const headerText = screen.getByText('Podcaster');

    expect(headerText).toBeInTheDocument();
  });

  it('renders the header with a link to the home page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Podcaster' });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/');
  });
});
