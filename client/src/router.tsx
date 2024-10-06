import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";
import AddDeskPage from "./pages/addDesPage";
import NotFoundPage from "./pages/NotFoundPage";
import DeskPage from "./pages/deskPage";
import PlayDeskPage from "./pages/PlayPageDesk";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import EditDeskPage from "./pages/EditeDeskPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "add-desk",
        element: <AddDeskPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "settings",
        element: <SettingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "desk/:id",
        element: <DeskPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "playDesk/:id",
        element: <PlayDeskPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "edit-desk/:id",
        element: <EditDeskPage />,
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
