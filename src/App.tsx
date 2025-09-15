import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getPosts } from './service';
import { PostsPage } from './components/PostsPage';

import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PostsPage />,
      loader: getPosts,
    },
  ]);

  return (
    <RouterProvider 
      router={router} 
    />
  );
}

export default App
