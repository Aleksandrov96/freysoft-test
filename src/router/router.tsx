import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import HomePage from "../pages/HomePage";
import ExpensesPage from "../pages/ExpensesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/expenses", element: <ExpensesPage /> },
    ],
  },
]);