import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSinglePodcast } from "../../services/podcast";
import Header from "../../components/header/Header";
import './episodes.css';
import CardInfo from "../../components/cardInfo/CardInfo";


function Episodes(props) {

    const params = useParams();
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        getSinglePodcast(params.podcastId).then((response) => setEpisode(response));
    }, [params.podcastId]);

    const episodeIdParam = parseInt(params.episodeId);
    const singleEpisode = episode.find(ep => ep.trackId === episodeIdParam);

    return (singleEpisode ? <> <Header />
        <main className="main">
            <section className="main-section">
                <Link to={`/podcastDetail/${singleEpisode.collectionId}`} className="info">
                    <CardInfo singleEpisode={singleEpisode} />
                </Link>
                <article className="episode-description">
                    <h4>{singleEpisode.trackName}</h4>
                    <p>{singleEpisode.description}</p>
                    <audio controls>
                        <source src={singleEpisode.previewUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </article>
            </section>
        </main> </> : <div>Cant access to this episode</div>)
}


export default Episodes;