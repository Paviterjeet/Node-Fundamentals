import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './commponents/Header.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';


// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <CheckoutPage/>
      </>
    ),
  },
])

createRoot(document.getElementById('root')).render(
<StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
