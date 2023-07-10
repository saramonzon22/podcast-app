import './cardInfo.css';

function CardInfo(props) {
    const description = props.singlePodcast[props.singlePodcast.length - 1]?.shortDescription;
    const descriptionText = description ? description : 'The podcast author has not provided a description to show';

    return (
        <article className="info">
            <img src={props.singlePodcast[props.singlePodcast.length - 1].artworkUrl600} alt="" className="podcast-img" />
            <h4 className="podcast-title">{props.singlePodcast[props.singlePodcast.length - 1].collectionName} - {props.singlePodcast[0].artistName}</h4>
            <div className="podcast-description">
                <h4>Description:</h4>
                <p className="description-info">{descriptionText}</p>
            </div>
        </article>
    );
}

export default CardInfo;