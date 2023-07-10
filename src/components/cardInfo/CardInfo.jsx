import React from 'react';
import './cardInfo.css';

function CardInfo(props) {
  

  let content;
  if (props.singlePodcast) {
    
    const description = props.singlePodcast[props.singlePodcast.length - 1]?.shortDescription;
    const descriptionText = description ? description : 'The podcast author has not provided a description to show';

    content = (
      <>
        <article className="info">
          <img src={props.singlePodcast[props.singlePodcast.length - 1].artworkUrl600} alt="" className="podcast-img" />
          <div className='info-podcast'>
            <h4 className="podcast-title">{props.singlePodcast[props.singlePodcast.length - 1].collectionName}</h4>
            <p className='podcast-artist'>By {props.singlePodcast[0].artistName}</p>
          </div>
          <div className="podcast-description">
            <h4>Description:</h4>
            <p className="description-info">{descriptionText}</p>
          </div>
        </article>
      </>
    );
  } else if (props.singleEpisode) {

    const description = props.singleEpisode.shortDescription;
    const descriptionTextEpisode = description ? description : 'The podcast author has not provided a description to show';

    const collectionName = props.singleEpisode.collectionName;
    const alternativeName = collectionName ? collectionName : 'No name provided';
    content = (
      <>
          <img src={props.singleEpisode.artworkUrl600} alt="" className="podcast-img" />
          <div className='info-podcast'>
            <h4 className="podcast-title">{props.singleEpisode.collectionName}</h4>
            <p className='podcast-artist'>By {alternativeName}</p>
          </div>
          <div className="podcast-description">
            <h4>Description:</h4>
            <p className="description-info">{descriptionTextEpisode}</p>
          </div>
      </>
    );
  }

  return content;
}

export default CardInfo;