import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

    const [open, setOpen] = useState(false);

    const user = false;
   
  return (
  <nav className="h-[100px] flex items-center justify-between">
    <div className="flex items-center gap-[50px]">
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
    <div className="flex items-center justify-end md:bg-[#fcf5f3] h-full bg-transparent">
    {user ? (
        <div className="hidden md:flex items-center justify-between gap-x-5 font-bold">
          <div className="flex items-center justify-center cursor-pointer ms-16 text-xs">
          <img  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
            className="w-10 h-10 rounded-full object-cover mr-2"
           />
            <span>John Doe</span>
            </div>
            <Link to="/profile" className="me-12 py-3 px-6 text-sm bg-[#fece51] cursor-pointer border-none relative">
              <div className="absolute -top-2 -right-2 bg-red-700 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">3</div>
              <span>Profile</span>
            </Link>
        </div>

        ) : (
        <div className="hidden md:block">
        <a href="/" className="ms-14 me-16 px-3">Sign in</a>
        <a href="/" className="me-10 px-5 py-3 bg-[#fece51]">
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
          {user ?(
            <>
              <a href="/profile">profile</a>
              <a href="/logout">logout</a>   
              </>     
          ):(
            <>
               <a href="/login">Login</a>
               <a href="/signup">Signup</a>
            </>
          )}
       
        
        </div>
        )}


    </div>
  </nav>
  )
}
