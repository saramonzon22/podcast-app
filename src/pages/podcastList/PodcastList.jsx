import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTop100 } from "../../services/podcast";
import './podcastList.css';

function PodcastList() {
  const [podcastList, setPodcastList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTop100().then((response) => {
      setPodcastList(response);
      setFilteredPodcasts(response);
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
    filterPodcasts(e.currentTarget.value);
  };

  const filterPodcasts = (searchTerm) => {
    const filtered = podcastList.filter((podcast) => {
      const podcastName = podcast["im:name"].label.toLowerCase();
      const artistName = podcast["im:artist"].label.toLowerCase();
      const category = podcast.category.attributes.label.toLowerCase();
      return (
        podcastName.includes(searchTerm.toLowerCase()) ||
        artistName.includes(searchTerm.toLowerCase()) ||
        category.includes(searchTerm.toLowerCase())
      );
    });
    setFilteredPodcasts(filtered);
  };

  return (
    podcastList.length ? (
      <div className="home">
        <header className="main-header">
        <h2 onClick={() => navigate('/')} className="header-title">Podcaster</h2>
        <input type="text" value={search} placeholder='Search your favourite podcast!' onChange={handleChange} className="search"/>
        </header>
        <main className="main-home">
        {filteredPodcasts.length ? (
          filteredPodcasts.map((eachPodcast) => (
            <ul
              onClick={() =>
                navigate(`/podcastDetail/${eachPodcast.id.attributes["im:id"]}`)
              }
              className="card"
              key={eachPodcast.id.attributes["im:id"]}
            >
              <img
                src={eachPodcast["im:image"][2].label}
                className="img"
                alt="podcast-img"
              />
              <li className="name">{eachPodcast["im:name"].label}</li>
              <li className="artist">{eachPodcast["im:artist"].label}</li>
              <li className="category">
                {eachPodcast.category.attributes.label}
              </li>
            </ul>
          ))
        ) : (
          <div>No se encontraron podcasts</div>
        )}
        </main>
      </div>
    ) : (
      <div> Nada </div>
    )
  );
}

export default PodcastList;