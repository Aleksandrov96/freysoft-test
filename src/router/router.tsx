import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout/layout";
import PageTemplate from "@/pages/page-template";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <PageTemplate /> },
      { path: "/expenses", element: <PageTemplate /> },
    ],
  },
]);
