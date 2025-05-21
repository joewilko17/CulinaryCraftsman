import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './styles/global.css';
import Layout from './layout/Layout';
import IndexPage from './views/IndexPage';
import CraftPage from './views/CraftPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <IndexPage />
      },
      {
        path: '/craft',
        element: <CraftPage />
      }
    ]
  }
])

export const App = () => <RouterProvider router={router} />