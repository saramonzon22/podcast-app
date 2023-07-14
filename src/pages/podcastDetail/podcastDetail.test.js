import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import PodcastDetail from './PodcastDetail';
import { getSinglePodcast } from '../../services/podcast';

jest.mock('../../services/podcast');

describe('PodcastDetail', () => {

  test('renders "Could not connect to the server" when episode does not exist', async () => {
    const mockParams = {
      podcastId: '1234568',
    };

    getSinglePodcast.mockResolvedValue(null);
    render(
      <MemoryRouter initialEntries={[`/podcastDetail/${mockParams.podcastId}/`]}>
          <PodcastDetail />
      </MemoryRouter>
    );
    await waitFor(() => {
      const noEpisodeAvaiable = screen.getByText('Could not connect to the server');

      expect(noEpisodeAvaiable).toBeInTheDocument();
    });
  });
});