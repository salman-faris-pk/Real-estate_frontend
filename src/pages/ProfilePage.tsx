import { useNavigate } from "react-router-dom";
import { Chat } from "../components/Chat"
import { List } from "../components/List"
import apiRequest from "../lib/apiRequest";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const ProfilePage = () => {

  const {updateUser}:any=useContext(AuthContext)

  const navigate = useNavigate();

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
    <div className="flex flex-col md:flex-row h-full overflow-scroll thin-scrollbar md:overflow-hidden">
      <div className="flex-none h-max md:h-full md:flex-[3] overflow-y-scroll thin-scrollbar pb-[50px]">
        <div className="pr-[30px] md:pr-[50px] flex flex-col gap-[50px]">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-extralight text-gray-800">User Information</h1>
            <button className="py-2 px-3 md:py-3 md:px-6 bg-[#fece51] cursor-pointer border-none">Update Profile</button>
          </div>
          <div className="flex flex-col gap-[20px]">
            <span className="flex items-center gap-[20px]">
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
                className="w-10 h-10 rounded-[50px] object-cover"
              />
            </span>
            <span className="flex items-center gap-[20px]">
              Username: <b>John Doe</b>
            </span>
            <span className="flex items-center gap-[20px]">
              E-mail: <b>john@gmail.com</b>
            </span>
            <button className="w-[100px] bg-teal-600 border-none text-white py-[10px] px-[20px] cursor-pointer rounded-md"
             onClick={handleLogout}
            >
               Logout
            </button>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-extralight text-gray-800">My List</h1>
            <button className="py-2 px-3 md:py-3 md:px-6 bg-[#fece51] cursor-pointer border-none">Create New Post</button>
          </div>
          <List />
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-extralight text-gray-800">Saved List</h1>
          </div>
          <List />
        </div>
      </div>
    
        {/**right section */}
      <div className="flex-none h-max md:flex-[2] bg-[#fcf5f3] md:h-full">
        <div className="py-[0px] px-[20px]">
          <Chat/>
        </div>
      </div>
    </div>
  )
}
