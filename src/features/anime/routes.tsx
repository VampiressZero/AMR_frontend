import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const AnimePage = lazy(() =>
  import('./pages/AnimePage').then(module => ({ default: module.AnimePage })));

const AnimeTitle = lazy(() =>
    import('./pages/AnimeTitle').then(module => ({ default: module.AnimeTitle })));
  
const AnimeAllTitles = lazy(() =>
  import('./pages/AnimeAllTitles').then(module => ({ default: module.AnimeAllTitles })));

export const animeRoutes: RouteObject[] = [
  {
    children: [
      {
        path: '/anime',
        element: <AnimePage />,
      },
      {
        path: '/anime/:id',
        element: <AnimeTitle />,
      },
      {
        path: '/anime_all_titles',
        element: <AnimeAllTitles />,
      },
      {
        path: '*',
        element: <Navigate to="/anime" />,
      },
    ],
  },
];