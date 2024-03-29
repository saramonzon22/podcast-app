import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardInfo from "../../components/cardInfo/CardInfo";
import EpisodesLength from "../../components/episodesLength/EpisodesLength";
import Error from "../../components/error/Error";
import Header from '../../components/header/Header';
import HeaderEpisodes from "../../components/headerEpisodes/HeaderEpisodes";
import { MainStyled, SectionMain } from "../../components/main/main.styles";
import PodcastData from "../../components/podcastData/PodcastData";
import { getSinglePodcast } from "../../services/podcast";
import { PodcastEpisodesStyled, PodcastStyled } from "./podcastDetail.styles";

function PodcastDetail() {

    const params = useParams();
    const [singlePodcast, setSinglePodcast] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getSinglePodcast(params.podcastId);
            setSinglePodcast(response);
        };

        fetchData();
    }, [params.podcastId]);

    return (singlePodcast ?
        <>
            <Header />
            <MainStyled key={singlePodcast.collectionId}>
                <SectionMain>
                    <CardInfo singlePodcast={singlePodcast[0]} singleDescription={singlePodcast[singlePodcast.length - 1]} />
                    <PodcastStyled>
                        <EpisodesLength singlePodcast={singlePodcast} />
                        <PodcastEpisodesStyled>
                            <HeaderEpisodes singlePodcast={singlePodcast} />
                            {singlePodcast.map((podCast) => {
                                return (<PodcastData key={podCast.id} podCast={podCast} />
                                )
                            })}
                        </PodcastEpisodesStyled>
                    </PodcastStyled>
                </SectionMain>
            </MainStyled>
        </> : <Error />)
}

export default PodcastDetail;