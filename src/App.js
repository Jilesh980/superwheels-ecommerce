import React from 'react';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<HomePage />),
  },
  {
    path: "/products",
    element: (<ProductPage />),
  },
  {
    path: "/login",
    element: (<LoginPage />),
  },
  {
    path: "/sign-up",
    element: (<SignupPage />),
  },
  {
    path: "/cart",
    element: (<CartPage />),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
