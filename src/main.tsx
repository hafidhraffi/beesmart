import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router";
import Layout from './layout';
import HomePage from './pages/home_page/HomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginPage from './pages/login_page/LoginPage';
import DashboardPage from './pages/dashboard_page/DashboardPage';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import BlogPage from './pages/home_page/BlogPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "about", element: <AboutPage /> },
      // { path: "products", element: <ProductsPage /> },
    ],
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  // {
  //   path: "/*",
  //   element: <NotFound />,
  // },
]);

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </QueryClientProvider>
  </StrictMode>,
)
