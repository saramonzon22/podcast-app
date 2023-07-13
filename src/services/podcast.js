function checkLocalStorage(keyName, maxHoursValue) {
    const storedData = localStorage.getItem(keyName);

    if (storedData) {
        const storedDataObj = JSON.parse(storedData)
        const currentTime = new Date().getTime();
        const storedTime = storedDataObj.time;
        const differenceHours = (currentTime - storedTime) / (1000 * 60 * 60);

        if (differenceHours < maxHoursValue) {
            return storedDataObj.data;
        }
    }

    return null;
}

async function getTop100() {
    try {
        const cachedData = checkLocalStorage('top100Podcasts', 24);
        if (cachedData) {
            return cachedData;
        }
        const response = await fetch(
            'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
        );
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const formattedResponse = await response.json();
        
        const cachedDataObj = {
            data: formattedResponse.feed.entry,
            time: new Date().toISOString()
        };

        localStorage.setItem('top100Podcasts', JSON.stringify(cachedDataObj));
    
        const results = [];
    
        formattedResponse.feed.entry.forEach((podcast) => {
          const result = {
            id: podcast.id.attributes['im:id'],
            img: podcast['im:image'][2].label,
            name: podcast['im:name'].label,
            author: podcast['im:artist'].label,
            description: podcast.summary.label
          };
          results.push(result);
        });
        return results;

    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

async function getSinglePodcast(podcastId) {
    try {
        const cachedData = checkLocalStorage(`podcast-${podcastId}`, 24);
        if (cachedData) {
            return cachedData;
        }
        const response = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`);

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const formattedSinglePodcast = await response.json();
        const cachedDataObj = {
            data: formattedSinglePodcast.results,
            time: new Date().toISOString()
        };

        localStorage.setItem(`podcast-${podcastId}`, JSON.stringify(cachedDataObj));
        const formattedPodcast = formattedSinglePodcast.results;

        console.log(formattedPodcast)
       
        const results = [];

        formattedPodcast.forEach((singlePodcast) => {
            const result = {
                artworkUrl600: singlePodcast.artworkUrl600,
                collectionName: singlePodcast.collectionName,
                collectionId: singlePodcast.collectionId,
                description: singlePodcast.description, 
                shortDescription: singlePodcast.shortDescription,
                trackName: singlePodcast.trackName,
                trackTimeMillis: singlePodcast.trackTimeMillis,
                releaseDate: singlePodcast.releaseDate,
                trackId: singlePodcast.trackId
            };
            results.push(result);
          });
          return results;

    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}


export { getTop100, getSinglePodcast };