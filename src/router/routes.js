import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import PodcastList from "../pages/podcastList/PodcastList";
import PodcastDetail from "../pages/podcastDetail/PodcastDetail";
import Episodes from "../pages/episodes/Episodes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PodcastList />,
  },
  {
    path: "/podcastDetail/:podcastId",
    element: <PodcastDetail />,
  },
  {
    path: "/podcastDetail/:podcastId/episode/:episodeId",
    element: <Episodes />,
  }

]);

export default routes;