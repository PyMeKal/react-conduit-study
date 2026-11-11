// src/router.jsx
import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import ArticlePage from "./pages/ArticlePage";
import SettingsPage from "./pages/SettingsPage";
import EditorPage from "./pages/EditorPage";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ArticlePage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "editor", element: <EditorPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

export default router;