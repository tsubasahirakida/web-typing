import { createBrowserRouter } from 'react-router-dom';
import TopPage from '../pages/TopPage';
import { GamePage } from '../pages/GamePage';

export const router = createBrowserRouter([
  { path: '/', element: <TopPage /> },
  { path: '/top', element: <GamePage /> },
]);
