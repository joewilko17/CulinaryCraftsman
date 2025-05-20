import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './styles/global.css';
import Layout from './layout/Layout';
import IndexPage from './views/IndexPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <IndexPage />
      }
    ]
  }
])

export const App = () => <RouterProvider router={router} />