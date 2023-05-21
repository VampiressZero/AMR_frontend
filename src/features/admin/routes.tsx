import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const AdminPage = lazy(() =>
  import('./pages/AdminPage').then(module => ({ default: module.AdminPage })));

export const adminRoutes: RouteObject[] = [
  {
    children: [
      {
        path: '/admin',
        element: <AdminPage />,
      },
    ],
  },
];