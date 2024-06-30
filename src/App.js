import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/nav/NavBar";
import BodyLayout from "./components/pages/BodyLayout";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import StoryLayout from "./components/pages/StoryLayout";
import Story from "./components/pages/Story";
import AdminDashboard from "./components/pages/AdminDashboard";
import ManagePosts from "./components/pages/ManagePosts";
import AddNewStory from "./components/pages/AddNewStory";
import Footer from "./components/nav/Footer";
import Interview from "./components/pages/Interview";
import Discussion from "./components/pages/Discussion";
import Authentication from "./components/pages/Authentication";

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/auth",
        element: <Authentication />,
      },
      {
        path: "/",
        element: <BodyLayout />,
      },
      {
        path: "/",
        element: <BodyLayout />,
      },
      {
        path: "/story",
        element: <StoryLayout />,
      },
      {
        path: "/interview",
        element: <Interview />,
      },
      {
        path: "/discussion",
        element: <Discussion />,
      },
      {
        path: "/story/001",
        element: <Story />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
        children: [
          {
            path: "admin/posts",
            element: <ManagePosts />,
          },
          {
            path: "admin/add-new-story",
            element: <AddNewStory />,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

const rootElem = document.getElementById("root");
const root = ReactDOM.createRoot(rootElem);
root.render(<RouterProvider router={appRouter} />);
