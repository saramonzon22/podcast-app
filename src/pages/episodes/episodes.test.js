import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Link } from 'react-router-dom';
import Episodes from './Episodes';
import { getSinglePodcast } from '../../services/podcast';

jest.mock('../../services/podcast');

describe('Episodes', () => {
  test('renders episode details when it exists', async () => {
    const mockEpisode = {
      trackId: 1,
      collectionId: 1,
      trackName: 'Episode 1',
      description: 'Episode description',
      previewUrl: 'https://example.com/audio.mp3',
    };
    const mockParams = {
      podcastId: '1',
      episodeId: '1',
    };

    getSinglePodcast.mockResolvedValue(mockEpisode);

    render(
      <MemoryRouter initialEntries={[`/podcastDetail/${mockParams.podcastId}/episodes/${mockParams.episodeId}`]}>
        <Link to="/podcastDetail/:podcastId/episodes/:episodeId">
          <Episodes />
        </Link>
      </MemoryRouter>
    );
  });

  test('renders "Cant access to this episode" when episode does not exist', async () => {
    const mockParams = {
      podcastId: '1',
      episodeId: '1',
    };

    getSinglePodcast.mockResolvedValue(null);
    render(
      <MemoryRouter initialEntries={[`/podcastDetail/${mockParams.podcastId}/episodes/${mockParams.episodeId}`]}>
        <Link to="/podcastDetail/:podcastId/episodes/:episodeId">
          <Episodes />
        </Link>
      </MemoryRouter>
    );
    await waitFor(() => {
      const noEpisodeAvaiable = screen.getByText('Cant access to this episode');

      expect(noEpisodeAvaiable).toBeInTheDocument();
    });
  });
});
