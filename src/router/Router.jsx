import * as React from "react";
import { RouterProvider } from "react-router-dom";

import routes from './routes';

const Router = () => <RouterProvider router={routes} />;

export default Router;