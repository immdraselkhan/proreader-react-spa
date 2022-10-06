import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import About from '../components/About';
import Books from '../components/Books';
import BookDetails from '../components/BookDetails';

export const router = createBrowserRouter ([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'books',
        element: <Books />,
        loader: async () => await fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'book/:isbn13',
        element: <BookDetails />,
        loader: async ({params}) => await fetch(`https://api.itbook.store/1.0/books/${params.isbn13}`)
      }
    ],
  },
]);