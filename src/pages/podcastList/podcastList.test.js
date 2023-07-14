describe('getTop100', () => {

  test('throw error when fetch fails', async () => {

    const errorMessage = 'Error en la solicitud';
    global.fetch = jest.fn(() => Promise.reject(new Error(errorMessage)));

    await expect(fetch).rejects.toThrow(errorMessage);

  });
});