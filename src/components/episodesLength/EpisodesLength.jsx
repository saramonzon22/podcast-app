import {EpisodesStyles} from './episodesLength.styles';

function EpisodesLength(props) {
    return <EpisodesStyles>Episodes: {props.singlePodcast.length}</EpisodesStyles>
}

export default EpisodesLength;