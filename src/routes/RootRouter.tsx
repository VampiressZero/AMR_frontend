import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { animeRoutes } from 'features/anime/routes';
import { adminRoutes } from 'features/admin/routes';
import { mangaRoutes } from 'features/manga/routes';
// import { loginRoutes } from '../features/auth/routes';

const routes: RouteObject[] = [
  ...animeRoutes,
  ...mangaRoutes,
  ...adminRoutes,
  // ...loginRoutes,
  {
    path: '*',
    element: <Navigate to="/anime_title" />,
  },
];

export const RootRouter: FC = () => useRoutes(routes);
