import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Quizdetails from './components/QuizDetails/Quizdetails';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz/')
          },
          element: <Home></Home>
        },

        {
          path: '/quiz/:quizId',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <Quizdetails></Quizdetails>
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

    {
      path: '*', element: <div className='text-center bg-info m-5 p-5 rounded'>
        <h2>404 Not Found <br /> This route is not found.</h2> </div>
    }

  ])

  return (
    <div>

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
