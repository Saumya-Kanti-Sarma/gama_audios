import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Jsx/Home.jsx'
import Contact from './pages/Jsx/Contact.jsx'
import About from './pages/Jsx/About.jsx'
import Blogs from './pages/Jsx/Blogs.jsx'
const App = () => {

  const route = createBrowserRouter([
    {
      path: "gama_audios/",
      element: <Home />,
    },
    {
      path: "/gama_audios/contacts",
      element: <Contact />,
    },
    {
      path: "/gama_audios/about",
      element: <About />,
    },
    {
      path: "/gama_audios/blogs",
      element: <Blogs />,
    },
    {
      path: "/gama_audios/video_downloads",
      element: "Work under pogress...",
    },
  ])

  return (
    <>
      <RouterProvider router={route} />
      <Outlet />
    </>
  )
}

export default App
