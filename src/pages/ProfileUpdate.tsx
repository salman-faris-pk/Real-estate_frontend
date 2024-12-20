import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";
import { UploadWidget } from "../components/uploadWidget/UploadWidget"






const ProfileUpdate = () => {


    const { currentUser, updateUser }:any = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement); 
 
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/user/${currentUser.id}`, {
        username,
        email,
        password,
        avatar:avatar[0]
      });
      if(res.status === 200){
        updateUser(res.data);
        navigate("/profile");
      }
    
    } catch (err:any) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="h-full sm:flex flex-col sm:flex-row">

      <div className="flex-[3] flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          <h1 className="font-semibold">Update Profile</h1>
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
              className="p-[20px] rounded-[5px] border border-solid border-gray-600"
            />
          </div>
          <div className="flex flex-col gap0-[5px]">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
              className="p-[20px] rounded-[5px] border border-solid border-gray-600"
            />
          </div>
          <div className="flex flex-col gap0-[5px]">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" className="p-[20px] rounded-[5px] border border-solid border-gray-600" />
          </div>
          <button className="p-[20px] rounded-[5px] border-none bg-teal-600 text-white font-bold cursor-pointer"
           >Update</button>
          {error && <span className="text-yellow-500 text-sm">{error}</span>}
        </form>
      </div>

      <div className="flex-[2] sm:bg-[#fcf5f3] sm:flex flex-col gap-[20px] items-center justify-center mt-5 sm:mt-0">
        <img src={avatar[0] || currentUser.avatar || "/noavatar.jpg"} alt="" className="w-full sm:w-1/2 object-cover mb-3 sm:mb-0 rounded-md" />
        <UploadWidget
          uwConfig={{
            cloudName: "dqqcpkeup",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>

  )
}

export default ProfileUpdate