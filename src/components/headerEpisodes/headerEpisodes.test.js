import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeaderEpisodes from './HeaderEpisodes';

describe('Header-episodes component', () => {
    it('renders the header-episodes', () => {
        render(
            <MemoryRouter>
                <HeaderEpisodes />
            </MemoryRouter>
        );

        const episodesTitle = screen.getByText('Title');
        const episodesDate = screen.getByText('Date');
        const episodesDuration = screen.getByText('Duration');

        expect(episodesTitle).toBeInTheDocument();
        expect(episodesDate).toBeInTheDocument();
        expect(episodesDuration).toBeInTheDocument();
    });

});

