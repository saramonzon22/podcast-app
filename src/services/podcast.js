async function getTop100() {
    try {
      const storedData = localStorage.getItem('top100Podcasts');
      const storedTimeLS = localStorage.getItem('top100PodcastsTimestamp');
  
      if (storedData && storedTimeLS) {
        const currentTime = new Date().getTime();
        const storedTime = new Date(storedTimeLS).getTime();
        const differenceHours = (currentTime - storedTime) / (1000 * 60 * 60);
  
        if (differenceHours < 24) {
          return JSON.parse(storedData);
        }
      }
  
      const response = await fetch(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
      );
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const formattedResponse = await response.json();
  
      localStorage.setItem('top100Podcasts', JSON.stringify(formattedResponse.feed.entry));
      localStorage.setItem('top100PodcastsTimestamp', new Date().toISOString());
  
      return formattedResponse.feed.entry;
    } catch (error) {
      console.error('Ocurrió un error:', error);
      throw error;
    }
  }
  
  export { getTop100 };