import { LinkStyles } from '../link/link.styles';
import { List } from "./podcastData.styles";

function PodcastData(props) {

  const millisToTime = function (mis) {

    function addZ(n) {
      return (n < 10 ? '0' : '') + n;
    }

    const ms = mis % 1000;
    mis = (mis - ms) / 1000;
    const secs = mis % 60;
    mis = (mis - secs) / 60;
    const mins = mis % 60;
    const hors = (mis - mins) / 60;
    return addZ(hors) + ':' + addZ(mins) + ':' + addZ(secs);
  }
  const date = function (d) {
    const dateOnly = d.split('T')[0];
    const dateSort = dateOnly.split('-');
    const reversedDate = dateSort[2] + "-" + dateSort[1] + "-" + dateSort[0];
    return reversedDate;
  }

  return <LinkStyles to={`/podcastDetail/${props.podCast.collectionId}/episode/${props.podCast.trackId}`} podCast={props.podCast}> 
            <List>
              <li>{props.podCast.trackName}</li>
              <li>{date(props.podCast.releaseDate)}</li>
              <li>{millisToTime(props.podCast.trackTimeMillis)}</li>
            </List>
          </LinkStyles>
}

export default PodcastData;