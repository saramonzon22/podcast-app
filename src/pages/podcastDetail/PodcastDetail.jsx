import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePodcast } from "../../services/podcast";
import Header from '../../components/header/Header';
import HeaderEpisodes from "../../components/headerEpisodes/HeaderEpisodes";
import { MainStyled, SectionMain } from "../../components/main/main.styles";
import {PodcastStyled, PodcastEpisodesStyled } from "./podcastDetail.styles";
import CardInfo from "../../components/cardInfo/CardInfo";
import PodcastData from "../../components/podcastData/PodcastData";
import EpisodesLength from "../../components/episodesLength/EpisodesLength";

function PodcastDetail(props) {

    const params = useParams();
    const [singlePodcast, setSinglePodcast] = useState([]);

    useEffect(() => {
        getSinglePodcast(params.podcastId).then((response) => setSinglePodcast(response));
    }, [params.podcastId]);

    return (singlePodcast ?
        <>
            <Header />
            <MainStyled>
                <SectionMain>
                    <CardInfo singlePodcast={singlePodcast[0]} />
                    <PodcastStyled>
                        <EpisodesLength singlePodcast={singlePodcast} />
                        <PodcastEpisodesStyled>
                            <HeaderEpisodes singlePodcast={singlePodcast} />
                            {singlePodcast.map((podCast) => {
                                return (<PodcastData podCast={podCast} />
                                )
                            })}
                        </PodcastEpisodesStyled>
                    </PodcastStyled>
                </SectionMain>
            </MainStyled>
        </> : <div>The request could not be carried out</div>)
}

export default PodcastDetail;