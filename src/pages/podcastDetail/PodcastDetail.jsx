import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePodcast } from "../../services/podcast";
import './podcastDetail.css';
import Header from '../../components/header/Header';
import HeaderEpisodes from "../../components/headerEpisodes/HeaderEpisodes";
import CardInfo from "../../components/cardInfo/CardInfo";
import PodcastData from "../../components/podcastData/PodcastData";
import EpisodesLength from "../../components/episodesLength/EpisodesLength";
import Loading from "../../components/loading/Loading";

function PodcastDetail(props) {

    const params = useParams();
    const [singlePodcast, setSinglePodcast] = useState([]);

    useEffect(() => {
        getSinglePodcast(params.podcastId).then((response) => setSinglePodcast(response));
    }, [params.podcastId]);

    return (singlePodcast.length ?
        <>
            <Header />
            <main className="main">
                <section className="main-section">
                    <CardInfo singlePodcast={singlePodcast[0]} />
                    <section className="section-episodes">
                        <EpisodesLength singlePodcast={singlePodcast} />
                        <article className="episodes">
                            <HeaderEpisodes singlePodcast={singlePodcast} />
                            {singlePodcast.map((podCast) => {
                                return (<PodcastData podCast={podCast} />
                                )
                            })}
                        </article>
                    </section>
                </section>
            </main>
        </> : <Loading />)
}

export default PodcastDetail;