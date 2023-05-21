import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const MangaPage = lazy(() =>
  import('./pages/MangaPage').then(module => ({ default: module.MangaPage })));

const MangaTitle = lazy(() =>
    import('./pages/MangaTitle').then(module => ({ default: module.MangaTitle })));
  
const MangaAllTitles = lazy(() =>
  import('./pages/MangaAllTitles').then(module => ({ default: module.MangaAllTitles })));

export const mangaRoutes: RouteObject[] = [
  {
    children: [
      {
        path: '/manga',
        element: <MangaPage />,
      },
      {
        path: '/manga/:id',
        element: <MangaTitle />,
      },
      {
        path: '/manga_all_titles',
        element: <MangaAllTitles />,
      },
      {
        path: '*',
        element: <Navigate to="/manga" />,
      },
    ],
  },
];