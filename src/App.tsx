import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NoteApp from './components/pages/NoteApp';
import ErrorPage from './components/pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <NoteApp />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
