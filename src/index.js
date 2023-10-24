import * as React from "react";
import {lazy, Suspense} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from "./layout/Layout";

import {store} from './store'
import {Provider} from 'react-redux'

const App = lazy(() => import('./layout/page/App'));
const SignUpPage = lazy(() => import('./layout/page/SignUpPage'));
const SignInPage = lazy(() => import('./layout/page/SignInPage'));
const ProductsPage = lazy(() => import("./layout/page/ProductsPage"));
const BasketPage = lazy(() => import("./layout/page/BasketPage"));
const ProductPage = lazy(() => import("./layout/page/ProductPage"));
const router = createBrowserRouter([

  {
    path: "/",
    element: (<Layout/>),
    children: [
      {
        path: "/",
        element: (<App/>),
      },
      {
        path: "/signUp",
        element: (<SignUpPage/>),
      },
      {
        path: "/signIn",
        element: (<SignInPage/>),
      },
      {
        path: "/products",
        element: (<ProductsPage/>),
      },
      {
        path: "/products/:id",
        element: (<ProductPage/>),
      },
      {
        path: "/products/basket",
        element: (<BasketPage/>),
      },

    ]
  },

]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
