import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        }
      ]
    },

    { path: '*', element: <div className='text-center'> 404 Not Found <br /> This route is not found.</div> }

  ])

  return (
    <div>

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
