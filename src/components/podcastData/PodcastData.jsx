import { LinkStyles } from '../link/link.styles';
import { List } from "./podcastData.styles";
import { millisToTime, date } from '../../utils/utils';

function PodcastData(props) {

  return <LinkStyles to={`/podcastDetail/${props.podCast.collectionId}/episode/${props.podCast.trackId}`}> 
            <List key={props.podCast.trackId}>
              <li>{props.podCast.trackName}</li>
              <li>{date(props.podCast.releaseDate)}</li>
              <li>{millisToTime(props.podCast.trackTimeMillis)}</li>
            </List>
          </LinkStyles>
}

export default PodcastData;