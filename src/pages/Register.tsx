import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import apiRequest from "../lib/apiRequest";


export const Register = () => {

   const [error,setError]=useState('')
   const [isLoading, setIsLoading] = useState(false);

   const navigate = useNavigate();


   const handleSubmit =async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setError("")
        setIsLoading(true)
        const formData= new FormData(e.target as HTMLFormElement)

        const username= formData.get('username');
        const email= formData.get('email')
        const password= formData.get('password')
         
        try {
        const response = await apiRequest.post("/auth/register", {
          username,
          email,
          password,
        });
        
        if(response.data.success){
          navigate("/login");  
        }
  
      } catch (err:any) {
        setError(err.response.data.message);
      } finally {
        setIsLoading(false);
      }
   }


  return (
    <div className="h-full flex">
    <div className="flex-[3] h-full flex items-center justify-center">
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        <h1 className="text-lg font-semibold">Create an Account</h1>
        <input name="username" type="text" placeholder="Username" className="p-[20px] border border-solid border-gray-600"/>
        <input name="email" type="text" placeholder="Email"  className="p-[20px] border border-solid border-gray-600"/>
        <input name="password" type="password" placeholder="Password"  className="p-[20px] border border-solid border-gray-600" />
        <button type="submit" disabled={isLoading} className="p-[20px] rounded-[5px] border-none bg-teal-600 text-white font-bold cursor-pointer disabled:bg-[#bed9d8] disabled:cursor-not-allowed"
          >Register</button>
           {error && <span className="text-sm text-red-700">{error}</span>}
        <Link to="/login" className="text-[14px] text-gray-700 w-max">Do you have an account?
          <span className="ms-2 underline text-[rgba(0,26,255,0.59)]">Login</span>
        </Link>
      </form>
    </div>
    <div className="flex-[2] bg-[#fcf5f3] hidden md:flex items-center justify-center">
      <img src="/bg.png" alt="" className="w-full" />
    </div>
  </div>
  )
}
