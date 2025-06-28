import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    
    Component: Root,
    children: [
      { index: true, Component: Home },
     {
        path: "/project/:id",
        Component: ProjectDetails
      },
    ],
  },
]);
