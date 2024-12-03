import Navbar from "../../components/Navbar"
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="layout sm:max-w-[640px] md:max-w-[1120px] lg:max-w-[1280px]">
       <div>
          <Navbar />
       </div>

       <div className="h-[calc(100vh-80px)]">
           <Outlet />
       </div>
   
    </div>
  )
}
