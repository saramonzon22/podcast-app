import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePodcast } from "../../services/podcast";
import Header from "../../components/header/Header";
import { MainStyled, SectionMain } from "../../components/main/main.styles";
import { LinkStyles } from '../../components/link/link.styles';
import { EpisodesStyles } from './episodes.styles';
import './episodes.styles.js';
import CardInfo from "../../components/cardInfo/CardInfo";


function Episodes() {

    const params = useParams();
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        getSinglePodcast(params.podcastId).then((response) => setEpisode(response));
    }, [params.podcastId]);

    const episodeIdParam = parseInt(params.episodeId);
    const singleEpisode = episode.find(ep => ep.trackId === episodeIdParam);

    return (singleEpisode ? <> <Header />
        <MainStyled>
            <SectionMain>
                <LinkStyles to={`/podcastDetail/${singleEpisode.collectionId}`}>
                    <CardInfo singleEpisode={singleEpisode} />
                </LinkStyles>
                <EpisodesStyles>
                    <h4>{singleEpisode.trackName}</h4>
                    <p>{singleEpisode.description}</p>
                    <audio controls>
                        <source src={singleEpisode.previewUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </EpisodesStyles>
            </SectionMain>
        </MainStyled> </> : <div>Cant access to this episode</div>)
}


export default Episodes;