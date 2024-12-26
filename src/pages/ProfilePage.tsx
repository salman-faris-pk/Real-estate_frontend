import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Chat } from "../components/Chat";
import { List } from "../components/List";
import apiRequest from "../lib/apiRequest";
import { Suspense, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const ProfilePage = () => {

  const data = useLoaderData();

  const { updateUser, currentUser }: any = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col md:flex-row h-full overflow-scroll thin-scrollbar md:overflow-hidden">
      <div className="flex-none h-max md:h-full md:flex-[3] overflow-y-scroll thin-scrollbar pb-[50px]">
        <div className="pr-[30px] md:pr-[50px] flex flex-col gap-[50px]">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-extralight text-gray-800">
              User Information
            </h1>
            <Link to={"/profile/update"}>
              <button className="py-2 px-3 md:py-3 md:px-6 bg-[#fece51] cursor-pointer border-none">
                Update Profile
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-[20px]">
            <span className="flex items-center gap-[20px]">
              Avatar:
              <img
                src={currentUser.avatar || "/noavatar.jpg"}
                alt="avatar"
                className="w-10 h-10 rounded-[50px] object-cover"
              />
            </span>
            <span className="flex items-center gap-[20px]">
              Username: <b>{currentUser.username}</b>
            </span>
            <span className="flex items-center gap-[20px]">
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button
              className="w-[100px] bg-teal-600 border-none text-white py-[10px] px-[20px] cursor-pointer rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-extralight text-gray-800">
              My List
            </h1>
            <Link to={"/post/add"}>
              <button className="py-2 px-3 md:py-3 md:px-6 bg-[#fece51] cursor-pointer border-none">
                Create New Post
              </button>
            </Link>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
                {(postResponse) =>
                postResponse.data.userPosts.length > 0 ? (
                  <List posts={postResponse.data.userPosts} />
                ) : (
                  <p className="text-gray-400 tracking-wider">No properties listed yet. Start posting now!</p>
                )
                 }
            </Await>
          </Suspense>

          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-extralight text-gray-800">
              Saved List
            </h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.savedPosts.length > 0 ? (
                  <List posts={postResponse.data.savedPosts} />
                ) : (
                  <p className="text-gray-400 tracking-wider">No saved properties. Browse and save your favorites!</p>
                )
              }
            </Await>
          </Suspense>
        </div>
      </div>

      {/**right section */}
      <div className="flex-none h-max md:flex-[2] bg-[#fcf5f3] md:h-full">
        <div className="py-[0px] px-[20px]">

         <Suspense fallback={<p>Loading....</p>}>
           <Await
             resolve={data.chatResponse}
             errorElement={<p>Error loading chats!</p>}
           >

            {(chatResponse) => <Chat chats={chatResponse.data}/>}

           </Await>
         </Suspense>

        </div>
      </div>
    </div>
  );
};
