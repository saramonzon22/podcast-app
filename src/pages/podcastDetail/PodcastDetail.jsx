import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePodcast } from "../../services/podcast";
import Header from '../../components/header/Header';
import HeaderEpisodes from "../../components/headerEpisodes/HeaderEpisodes";
import CardInfo from "../../components/cardInfo/CardInfo";
import EpisodesLength from "../../components/episodesLength/EpisodesLength";
import PodcastData from "../../components/podcastData/PodcastData";
import Error from "../../components/error/Error";
import { MainStyled, SectionMain } from "../../components/main/main.styles";
import {PodcastStyled, PodcastEpisodesStyled } from "./podcastDetail.styles";

function PodcastDetail() {

    const params = useParams();
    const [singlePodcast, setSinglePodcast] = useState([]);

    useEffect(() => {
        getSinglePodcast(params.podcastId).then((response) => setSinglePodcast(response));
    }, [params.podcastId]);

    return (singlePodcast ?
        <>
            <Header />
            <MainStyled  key={singlePodcast.collectionId}>
                <SectionMain>
                    <CardInfo singlePodcast={singlePodcast[0]}/>
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