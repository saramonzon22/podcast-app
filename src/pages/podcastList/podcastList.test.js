import { getTop100 } from '../../services/podcast';

describe('getTop100', () => {

  test('fetch top100Podcasts', async () => {
    const limit = 100;
    const genre = '1310';
    global.fetch = jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({ feed: { entry: ['podcast', 'podcast1'] }})});

    await getTop100({ limit, genre });

    expect(fetch).toHaveBeenCalledWith(
      `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`
    );

  });

  test('throw error when fetch fails', async () => {
  
  const errorMessage = 'Error en la solicitud';
  global.fetch = jest.fn(() => Promise.reject(new Error(errorMessage)));

  await expect(fetch).rejects.toThrow(errorMessage);

});
});