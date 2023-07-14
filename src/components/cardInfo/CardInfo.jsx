import React from 'react';

import { Card, Italic } from './cardInfo.styles';

function CardInfo(props) {


  let content;
  if (props.singlePodcast) {

    const description = props.singleDescription.shortDescription;
    const descriptionText = description ? description : 'The podcast author has not provided a description to show';

    content = (
      <>
        <Card>
          <img src={props.singlePodcast.artworkUrl600} alt="podcast-img" />
          <div>
            <h4>{props.singlePodcast.trackName}</h4>
            <Italic>By {props.singlePodcast.collectionName}</Italic>
          </div>
          <div>
            <h4>Description:</h4>
            <p>{descriptionText}</p>
          </div>
        </Card>
      </>
    );
  } else if (props.singleEpisode) {

    const description = props.singleEpisode.shortDescription;
    const descriptionTextEpisode = description ? description : 'The podcast author has not provided a description to show';

    const collectionName = props.singleEpisode.collectionName;
    const alternativeName = collectionName ? collectionName : 'No name provided';
    content = (
      <Card>
        <img src={props.singleEpisode.artworkUrl600} alt="podcast-img" />
        <div>
          <h4>{props.singleEpisode.trackName}</h4>
          <Italic>By {alternativeName}</Italic>
        </div>
        <div>
          <h4>Description:</h4>
          <p>{descriptionTextEpisode}</p>
        </div>
      </Card>
    );
  }

  return content;
}

export default CardInfo;