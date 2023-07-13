import { LinkStyles } from '../link/link.styles';
import { List, TitleEpisode } from "./podcastData.styles";
import { millisToTime, date } from '../../utils/utils';

function PodcastData(props) {

  return <LinkStyles to={`/podcastDetail/${props.podCast.collectionId}/episode/${props.podCast.trackId}`}> 
            <List key={props.podCast.trackId}>
              <TitleEpisode>{props.podCast.trackName}</TitleEpisode>
              <li>{date(props.podCast.releaseDate)}</li>
              <li>{millisToTime(props.podCast.trackTimeMillis)}</li>
            </List>
          </LinkStyles>
}

export default PodcastData;