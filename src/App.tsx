import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Layout } from './pages/layout/Layout';
import { Homepage } from './pages/Homepage';
import { ListPage } from './pages/listPage';
import { SinglePage } from './pages/SinglePage';
import { ProfilePage } from './pages/ProfilePage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Error } from './pages/Error';



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
            path:"/profile",
            element:<ProfilePage/>
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
    }
  ]);

  return (
  
    <RouterProvider router={router}/>
  )
}

export default App