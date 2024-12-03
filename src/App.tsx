import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Layout } from './pages/layout/layout';
import { Homepage } from './pages/Homepage';
import { ListPage } from './pages/listPage';

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

          
      ]
    }
  ]);

  return (
  
    <RouterProvider router={router}/>
  )
}

export default App