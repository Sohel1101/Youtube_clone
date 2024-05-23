import React from 'react'
import Head from './Components/Head'
import Body from './Components/Body'
import { Provider } from "react-redux";
import appStore from './util/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import VideoPage from './Components/VideoPage';
import ButtonSearchResult from './Components/ButtonSearchResult';
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />
        },
        {
          path: '/watch/:id',
          element: <VideoPage />
        },
        {
          path:'/ButtonSearchResult',
          element:<ButtonSearchResult/>
        }
      ],
    }
  ])
  return (

    <Provider store={appStore}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />

      </div>
    </Provider>

  )
}

export default App