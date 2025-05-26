import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './styles/global.css';
import Layout from './layout/Layout';
import IndexPage from './views/IndexPage';
import CraftPage from './views/CraftPage';
import RecommendationPage from './views/RecommendationPage';
import RecipesPage from './views/RecipesPage';
import ProfilePage from './views/ProfilePage';

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
      },
      {
        path: '/recipes',
        element: <RecipesPage />
      },
      {
        path: '/recommend',
        element: <RecommendationPage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      }
    ]
  }
])

export const App = () => <RouterProvider router={router} />