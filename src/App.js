import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/nav/NavBar";
import BodyLayout from "./components/pages/BodyLayout";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import StoryLayout from "./components/pages/StoryLayout";
import Story from "./components/pages/Story";
import AdminDashboard from "./components/pages/AdminDashboard";
import ManagePosts from "./components/pages/ManagePosts";
import AddNewStory from "./components/pages/AddNewStory";
import Footer from "./components/nav/Footer";
import Interview from "./components/pages/Interview";
import Discussion from "./components/pages/Discussion";
import Authentication from "./components/pages/Authentication";
import { ThemeContextProvider } from "./components/utils/ThemeContext";
import AuthContext, {
  AuthContextProvider,
} from "./components/utils/AuthContext";
import { Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <ThemeContextProvider>
          <NavBar />
          <Toaster position="top-right" />
          <Outlet />
          <Footer />
        </ThemeContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;

const AdminRouteCheck = ({ children }) => {
  const authCntx = useContext(AuthContext);
  const { isLoggedIn } = authCntx;
  if (!isLoggedIn) return <Navigate to="/auth" />;

  return children;
};

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
        path: "/story/:storyId",
        element: <Story />,
      },
      {
        path: "/admin",
        element: (
          <AdminRouteCheck>
            <AdminDashboard />
          </AdminRouteCheck>
        ),
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
