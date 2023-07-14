import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import PodcastDetail from './PodcastDetail';
import { getSinglePodcast } from '../../services/podcast';

jest.mock('../../services/podcast');

describe('PodcastDetail', () => {
  test('renders podcast details when podcast exists', async () => {
    const mockPodcast = {
      podcastId: 1,
      podcastName: 'Podcast 1',
      };
    const mockParams = {
      podcastId: '1',
    };

    getSinglePodcast.mockResolvedValue(mockPodcast);

    render(
      <MemoryRouter initialEntries={[`/podcastDetail/${mockParams.podcastId}`]}>
        <PodcastDetail />
      </MemoryRouter>
    );
  });
});