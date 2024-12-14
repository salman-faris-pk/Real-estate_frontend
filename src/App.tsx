import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Layout, RequireAuth } from './pages/layout/Layout';
import { Homepage } from './pages/Homepage';
import { ListPage } from './pages/listPage';
import { SinglePage } from './pages/SinglePage';
import { ProfilePage } from './pages/ProfilePage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Error } from './pages/Error';
import ProfileUpdate from './pages/ProfileUpdate';



const App = () => {


  const router=createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
      children:[
          {
            path:"/",
            element: <Homepage/>
          },
          {
            path:'/list',
            element: <ListPage/>
          },
          {
            path:"/list/:id",
            element:<SinglePage />
          },
          {
            path:"/login",
            element:<Login/>
          },
          {
            path:"/register",
            element:<Register/>
          },
          {
            path: '*',
            element: <Error />
          },   
      ]
    },

    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          // loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />,
        },
        {
          path: "/add",
          // element: <NewPostPage />,
        },
      ],
    },
  ]);

  return (
  
    <RouterProvider router={router}/>
  )
}

export default App