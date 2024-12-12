import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import apiRequest from "../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";


export const Login = () => {

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser }:any= useContext(AuthContext)

  const navigate = useNavigate();

  const handleSubmit= async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target as HTMLFormElement);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      
      
      if(response.data.success){
        updateUser(response.data.userInfo)
         navigate("/");
        }
     
    } catch (err:any) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex">
    <div className="flex-[3] h-full flex items-center justify-center">
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        <h1 className="text-lg font-semibold">Welcome back</h1>
        <input name="username" type="text" placeholder="Username" className="p-[20px] border border-solid border-gray-700 rounded-[5px]"/>
        <input name="password" type="password" placeholder="Password" className="p-[20px] border border-solid border-gray-700 rounded-[5px]"/>
        <button type="submit" disabled={isLoading} className="p-[20px] rounded-[5px] border-none bg-teal-600 text-white font-bold cursor-pointer disabled:bg-[#BED9D8] disabled:cursor-not-allowed">
          Login</button>
        {error && <span className="text-sm text-red-700">{error}</span>}
        <Link to="/register" className="text-[14px] text-gray-700 w-max">{"Don't"} you have an account? 
         <span className="ms-2 underline text-[rgba(255,0,0,0.63)]">SignUp</span>
        </Link>
      </form>
    </div>
    <div className="flex-[2] bg-[#fcf5f3] hidden md:flex items-center justify-center">
      <img src="/bg.png" alt="" className="w-full"/>
    </div>
  </div>
  )
}
