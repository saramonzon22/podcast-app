import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import PodcastList from "../pages/podcastList/PodcastList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PodcastList />,
  },
]);

export default routes;