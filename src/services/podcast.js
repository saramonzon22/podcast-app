function checkLocalStorage(keyName, maxHoursValue) {
    const storedData = localStorage.getItem(keyName);
    const storedTimeLS = localStorage.getItem(`${keyName}Time`);

    if (storedData && storedTimeLS) {
        const currentTime = new Date().getTime();
        const storedTime = new Date(storedTimeLS).getTime();
        const differenceHours = (currentTime - storedTime) / (1000 * 60 * 60);

        if (differenceHours < maxHoursValue) {
            return JSON.parse(storedData);
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

        localStorage.setItem('top100Podcasts', JSON.stringify(formattedResponse.feed.entry));
        localStorage.setItem('top100PodcastsTime', new Date().toISOString());

        return formattedResponse.feed.entry;
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
        localStorage.setItem(`podcast-${podcastId}`, JSON.stringify(formattedSinglePodcast.results));
        localStorage.setItem(`podcast-${podcastId}Time`, new Date().toISOString());
        return formattedSinglePodcast.results;
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}


export { getTop100, getSinglePodcast };