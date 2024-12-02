import Navbar from "../../components/Navbar"
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="layout sm:max-w-[640px] md:max-w-[1120px] lg:max-w-[1280px] sm:bg-red-600 md:bg-yellow-600 lg:bg-pink-700">
       <div>
          <Navbar />
       </div>

       <div className="h-[calc(100vh-100px)]">
           <Outlet />
       </div>
   
    </div>
  )
}
