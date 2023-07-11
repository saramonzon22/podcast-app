import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EpisodesLength from './EpisodesLength';

describe('Episodes length component', () => {
    it('renders how many episodes this podcast has', () => {
      const mockSinglePodcast = {
        episodes: [ { title: 'episode'}, { title: 'episode1'}, { title: 'episode2'}, { title: 'episode3'} ]
      };
  
      render(
        <MemoryRouter>
          <EpisodesLength singlePodcast={mockSinglePodcast} />
        </MemoryRouter>
      );
  
      expect(mockSinglePodcast.episodes).toHaveLength(4);
    });
  });