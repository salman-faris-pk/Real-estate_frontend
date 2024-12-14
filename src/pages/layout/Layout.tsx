import { useContext } from "react";
import Navbar from "../../components/Navbar"
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";

 const Layout = () => {
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
};



const RequireAuth =()=>{

  const { currentUser }:any=useContext(AuthContext)
   
  if (!currentUser) return <Navigate to="/login" />;
  
  else {

    return (
      <div className="layout sm:max-w-[640px] md:max-w-[1120px] lg:max-w-[1280px]">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-80px)]">
          <Outlet />
        </div>
      </div>
    );
    
  }
};

export {Layout,RequireAuth}


