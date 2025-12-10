import { createBrowserRouter } from "react-router";
import App from "../App";
import CompanyPage from "../Pages/CompanyPage/Homepage/CompanyPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <HomePage />},
      {path: "search" , element: <SearchPage />},
      {path: "company/:ticker", element: <CompanyPage />},
    ]
  }
])