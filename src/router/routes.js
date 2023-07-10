import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import PodcastList from "../pages/podcastList/PodcastList";
import PodcastDetail from "../pages/podcastDetail/PodcastDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PodcastList />,
  },
  {
    path: "/podcastDetail/:podcastId",
    element: <PodcastDetail />,
  },
]);

export default routes;