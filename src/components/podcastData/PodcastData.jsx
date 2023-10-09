import { date, millisToTime } from '../../utils/utils';
import { LinkStyles } from '../link/link.styles';
import { List, TitleEpisode } from "./podcastData.styles";

function PodcastData(props) {

  return <LinkStyles to={`/podcastDetail/${props.podCast.collectionId}/episode/${props.podCast.trackId}`}> 
            <List key={props.podCast.trackId}>
              <TitleEpisode>{props.podCast.trackName}</TitleEpisode>
              <span>{date(props.podCast.releaseDate)}</span>
              <span>{millisToTime(props.podCast.trackTimeMillis)}</span>
            </List>
          </LinkStyles>
}

export default PodcastData;