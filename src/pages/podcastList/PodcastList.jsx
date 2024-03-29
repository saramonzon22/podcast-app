import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Loading from "../../components/loading/Loading";
import { getTop100 } from "../../services/podcast";
import { Home, MainCard, MainHome, MainSearch } from "./podcastList.styles";

function PodcastList() {
  const [podcastList, setPodcastList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    getTop100().then((response) => {
      setPodcastList(response);
      setFilteredPodcasts(response);
      setIsLoading(false);

    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
    filterPodcasts(e.currentTarget.value);
  };



  const filterPodcasts = (searchTerm) => {
    const filtered = podcastList.filter((podcast) => {
      const podcastName = podcast.name.toLowerCase();
      const artistName = podcast.author.toLowerCase();
      return (
        podcastName.includes(searchTerm.toLowerCase()) ||
        artistName.includes(searchTerm.toLowerCase()));
    });
    setFilteredPodcasts(filtered);
  };

  return (
    podcastList.length ? (
      <Home>
        <Header loading={isLoading}>
        </Header>
        <MainSearch><span>{filteredPodcasts.length}</span>
          <input type="text" value={search} placeholder='Search your favourite podcast!' onChange={handleChange} className="search-input" />
        </MainSearch>
        <MainHome>
          {filteredPodcasts.length ? (
            filteredPodcasts.map((eachPodcast) => (
              <MainCard
                onClick={() =>
                  navigate(`/podcastDetail/${eachPodcast.id}`)
                }
                key={eachPodcast.id}
              >
                <img
                  src={eachPodcast.img}
                  alt="podcast-img"
                />
                <h4>{eachPodcast.name}</h4>
                <p>{eachPodcast.author}</p>
              </MainCard>
            ))
          ) : (
            <div>
              We have not found any matches for your search</div>
          )}
        </MainHome>
      </Home>
    ) : (
      <Loading />
    )
  );
}

export default PodcastList;