import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router";
import Layout from './layout';
import HomePage from './pages/home_page/HomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
  // {
  //   path: "/terms-and-conditions",
  //   element: <UnderDevPage />,
  // },
  // {
  //   path: "/privacy-and-security",
  //   element: <UnderDevPage />,
  // },
  // {
  //   path: "/other-informations",
  //   element: <UnderDevPage />,
  // },
  // {
  //   path: "/*",
  //   element: <NotFound />,
  // },
]);

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
