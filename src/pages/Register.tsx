import { Link } from "react-router-dom"


export const Register = () => {
  return (
    <div className="h-full flex">
    <div className="flex-[3] h-full flex items-center justify-center">
      <form className="flex flex-col gap-[20px]">
        <h1 className="text-lg font-semibold">Create an Account</h1>
        <input name="username" type="text" placeholder="Username" className="p-[20px] border border-solid border-gray-600"/>
        <input name="email" type="text" placeholder="Email"  className="p-[20px] border border-solid border-gray-600"/>
        <input name="password" type="password" placeholder="Password"  className="p-[20px] border border-solid border-gray-600" />
        <button className="p-[20px] rounded-[5px] border-none bg-teal-600 text-white font-bold cursor-pointer disabled:bg-[#bed9d8] disabled:cursor-not-allowed"
          >Register</button>
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
