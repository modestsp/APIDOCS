import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Components/Layout/Layout.tsx';
import Users from './pages/Users.tsx';
import Products from './pages/Products.tsx';
import Categories from './pages/Category.tsx';
import Reviews from './pages/Reviews.tsx';
import Home from './pages/Home.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/docs",
    element: <Home/>
  },
  {
    path: "/docs/users",
    element: <Layout><Users /></Layout>
  },
  {
    path: "/docs/products",
    element: <Layout><Products /></Layout>
  },
  {
    path: "/docs/categories",
    element: <Layout><Categories /></Layout>
  },
  {
    path: "/docs/reviews",
    element: <Layout><Reviews /></Layout>
  }

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
