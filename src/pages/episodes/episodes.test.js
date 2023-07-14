import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Episodes from './Episodes';
import { getSinglePodcast } from '../../services/podcast';

jest.mock('../../services/podcast');

describe('Episodes', () => {

  test('renders "Cant access to this episode" when episode does not exist', async () => {
    const mockParams = {
      podcastId: '1',
      episodeId: '1',
    };

    getSinglePodcast.mockResolvedValue(null);
    render(
      <MemoryRouter initialEntries={[`/podcastDetail/${mockParams.podcastId}/episodes/${mockParams.episodeId}`]}>
          <Episodes />
      </MemoryRouter>
    );
    await waitFor(() => {
      const noEpisodeAvaiable = screen.getByText('Cant access to this episode');

      expect(noEpisodeAvaiable).toBeInTheDocument();
    });
  });
});
