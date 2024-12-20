import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";


export default function Navbar() {

    const [open, setOpen] = useState(false);
     const navigate=useNavigate()
    const {currentUser,updateUser}:any=useContext(AuthContext)

    const handleLogout=async()=>{
      try {
        await apiRequest.post("/auth/logout");
        updateUser(null);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
    
   
  return (
  <nav className="h-[80px] flex items-center justify-between">
    <div className="flex-[3] flex items-center gap-[40px]">
        <Link to="/" className="flex items-center justify-center font-bold text-[17px] md:text-[20px] gap-[10px]">
           <img src="/logo.png" alt="logo" className="w-5 md:w-7"/>
           <span>LuxoLand</span>
        </Link>
        <div className="hidden sm:flex items-center text-sm gap-[50px]">
        <a href="/" className="link-transition">Home</a>
        <a href="/about" className="link-transition">About</a>
        <a href="/contact" className="link-transition">Contact</a>
        <a href="/agents" className="link-transition">Agents</a>
        </div>
    </div>


    {/**right */}
    <div className="flex-[2] flex items-center justify-end md:bg-[#fcf5f3] h-full bg-transparent">
    {currentUser ? (
        <div className="hidden md:flex items-center justify-between gap-x-2 font-bold">
          <div className="flex items-center justify-center cursor-pointer ms-16 text-xs">
          <img   src={currentUser.avatar || "/noavatar.jpg"} alt=""
            className="w-10 h-10 rounded-full object-cover mr-2"
           />
            <span className="me-2">{currentUser.username}</span>
            </div>
            <Link to="/profile" className="me-12 py-3 px-6 text-sm bg-[#fece51] cursor-pointer border-none relative">
              <div className="absolute -top-2 -right-2 bg-red-700 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">3</div>
              <span>Profile</span>
            </Link>
        </div>

        ) : (
        <div className="hidden md:block">
        <a href="/login" className="me-10 px-3 font-medium">Sign in</a>
        <a href="/register" className="me-10 px-4 py-3 bg-[#fece51]">
          Sign up
        </a>
      </div>
    )}

   <div className="block md:hidden z-50 relative">
          <img
            src="/menu.png"
            alt="menu"
            className="w-9 h-9 cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        {open && (
        <div className={`block md:hidden ${open ? 'menu active' : 'menu'} gap-y-7`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
          {currentUser ?(
              <>
              <a href="/profile">profile</a>
              <a onClick={handleLogout} className="cursor-pointer">Logout</a>   
              </>     
          ):(
            <>
               <a href="/login">Login</a>
               <a href="/register">Signup</a>
            </>
          )}
       
        
        </div>
        )}


    </div>
  </nav>
  )
}
