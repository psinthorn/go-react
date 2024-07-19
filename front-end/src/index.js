import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Movies from './components/Movies';
import MovieManage from './components/MovieManage';
import Genres from './components/Genres';
import ManageCatalogue from './components/ManageCatalogue';
import GraphQL from './components/GraphQL';
import Login from './components/Login';
import LogOut from './components/LogOut';
import Movie from './components/Movie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/movie/:id",
        element: <Movie />
      },
      {
        path: "/genres",
        element: <Genres />
      },
      {
        path: "/movie-manage",
        element: <MovieManage />
      },
      {
        path: "/manage-catalogue",
        element: <ManageCatalogue />
      },
      {
        path: "/graphql",
        element: <GraphQL />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/logout",
        element: <LogOut />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <RouterProvider router={router} />
        </div>
      </div>
    </div>   
  </React.StrictMode>
);
