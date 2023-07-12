import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PodcastData from './PodcastData';

describe('PodcastData component', () => {

    test('Render podcastData with trackname, releaseDate and trackTime', async () => {

        const mockpodCast = {
            trackName: 'trackName',
            releaseDate: '11/07/2023',
            trackTimeMillis: '125469873',
        };
        const mockParams = {
            podcastId: '1',
        };
        render(
            <MemoryRouter initialEntries={[`/podcastDetail/${mockParams.podcastId}`]}>
                <PodcastData podCast={mockpodCast} />
            </MemoryRouter>
        );
    })
});