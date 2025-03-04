import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root';
import App from './App';
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
import ErrorPage from './pages/ErrorPage';
import BookDetails from './pages/BookDetails';
import Contacts from './pages/Contacts';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/listed-books',
        element: <ListedBooks />,
        loader: () => fetch('/books_data.json')
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead />
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
        loader: () => fetch('/books_data.json')
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)