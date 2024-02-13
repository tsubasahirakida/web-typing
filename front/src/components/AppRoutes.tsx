import { createBrowserRouter } from 'react-router-dom';
import TopPage from '../pages/TopPage';
import { GemePage } from '../pages/GemePage';

export const router = createBrowserRouter([
  { path: '/', element: <TopPage /> },
  { path: '/top', element: <GemePage /> },
]);
