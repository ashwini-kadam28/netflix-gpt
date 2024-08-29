import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';

const Body = () => {
 
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/",
            element: <Browse/>
        }
    ])
    
  return (
    <div>
        <RouterProvider router={appRouter}>

        </RouterProvider>
    </div>
  )
}

export default Body