import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserProvider from "./services/context/userProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import DeskProvider from "./services/context/desksProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <DeskProvider>
        <RouterProvider router={router} />
      </DeskProvider>
    </UserProvider>
  </React.StrictMode>
);
