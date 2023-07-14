import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PodcastData from './PodcastData';

describe('PodcastData component', () => {

    test('Render podcastData with trackname, releaseDate and trackTime', async () => {

        const mockpodCast = {
            trackName: 'trackName',
            releaseDate: '2023-07-11T18:25:43.000Z',
            trackTimeMillis: '3600000',
        };
        const mockParams = {
            podcastId: '1',
        };
        render(
            <MemoryRouter initialEntries={[`/podcastDetail/${mockParams.podcastId}`]}>
                <PodcastData podCast={mockpodCast} />
            </MemoryRouter>
        );
        const episodeTitle = screen.getByText('trackName');
        const releaseDate = screen.getByText('11-07-2023');
        const trackTime = screen.getByText('01:00:00');
    
        expect(episodeTitle).toBeInTheDocument();
        expect(releaseDate).toBeInTheDocument();
        expect(trackTime).toBeInTheDocument();
    })
});