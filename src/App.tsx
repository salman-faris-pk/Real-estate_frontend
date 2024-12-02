import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Layout } from './pages/layout/layout';
import { Homepage } from './pages/Homepage';

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

          
      ]
    }
  ]);

  return (
  
    <RouterProvider router={router}/>
  )
}

export default App