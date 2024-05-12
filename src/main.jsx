import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext/index.jsx";
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';

import BlogWritePage from "./pages/BlogWritePage.jsx";
import NewsWritePage from "./pages/NewsWritePage.jsx";
import EventWritePage from "./pages/EventWritePage.jsx";
import OpeningWritePage from "./pages/OpeningWritePage.jsx";
import CompendiumWritePage from "./pages/CompendiumWritePage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/writeblog",
    element: <BlogWritePage/>,
  },

  {
    path: "/writenews",
    element: <NewsWritePage/>,
  },

  {
    path: "/writeevent",
    element: <EventWritePage/>,
  },
  {
    path: "/writeopening",
    element: <OpeningWritePage/>,
  },
  {
    path: "/writecompendium",
    element: <CompendiumWritePage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}/></AuthProvider>
  </React.StrictMode>,
)
