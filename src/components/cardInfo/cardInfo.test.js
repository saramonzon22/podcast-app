import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardInfo from './CardInfo';

describe('Card Info component', () => {
    
    test('Render cardInfo with single podcast', async () => {

        const mockSinglePodcast = {
            title: 'episode',
            artistName: 'name', 
            artworkUrl600: 'https://placehold.co/600x400/EEE/31343C',
            collectionName: 'collectionName',
            shortDescription: 'shortDescription', 
        };
        const mockParams = {
            podcastId: '1',
          };


        render(
            <MemoryRouter initialEntries={[`/podcastDetail/${mockParams.podcastId}`]}>
              <CardInfo singlePodcast={mockSinglePodcast} />
            </MemoryRouter>
          );
    })
    test('Render cardInfo with single episode', async () => {

        const mockSingleEpisode = {
            title: 'episode',
            artistName: 'name', 
            artworkUrl600: 'https://placehold.co/600x400/EEE/31343C',
            collectionName: 'collectionName',
            shortDescription: 'shortDescription', 
        };
        const mockParams = {
            podcastId: '1',
        };


        render(
            <MemoryRouter initialEntries={[`/podcastDetail/${mockParams.podcastId}`]}>
              <CardInfo singleEpisode={mockSingleEpisode} />
            </MemoryRouter>
          );
    })
    });
