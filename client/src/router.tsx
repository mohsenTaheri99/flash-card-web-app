import { createBrowserRouter } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage";

import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1> layout :</h1>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <h2>home page</h2>,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
