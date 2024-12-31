import { Map } from "../components/Map";
import { GiBusStop } from "react-icons/gi";
import { IoRestaurantOutline } from "react-icons/io5";
import { Slider } from "../components/Slider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";

export const SinglePage = () => {
  const post = useLoaderData();
  // console.log(post.isChat);
  

  const [saved, setSaved] = useState(post.isSaved);
  const [addChat, setAddChat] = useState(post.isChat);
  const { currentUser }: any = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }

    setSaved((prev: any) => !prev);

    try {
      await apiRequest.post("/user/save", {
        postId: post.id,
      });
    } catch (err) {
      console.log(err);
      setSaved((prev: any) => !prev);
    }
  };

  const handleAddChat = async () => {
    if (!currentUser) {
      navigate("/login");
    };

    try {
       await apiRequest.post("/chat/", {
        receiverId: post.userId,
      });

      setAddChat(true)

    } catch (err) {
      console.log(err);
      setAddChat((prev: any) => !prev);
    }
  };

  return (
    <div className="flex-col md:flex-row flex overflow-y-scroll thin-scrollbar md:overflow-hidden h-full ">
      {/**left side */}
      <div className="flex-none h-max mb-[50px] md:mb-[0px] md:flex-[3] md:h-full overflow-hidden md:overflow-y-scroll thin-scrollbar">
        <div className="pr-[15px] sm:pr-[0px] md:pr-[20px]">
          <Slider images={post?.images} />
          <div className="mt-[50px]">
            <div className="flex-col gap-[20px] sm:gap-[0px] sm:flex-row flex justify-between">
              <div className="flex flex-col gap-[20px]">
                <h1 className="font-semibold text-[17px] md:text-[20px]">
                  {post?.title}
                </h1>
                <div className="flex gap-[5px] items-center text-[#888] text-[12px]">
                  <img src="/pin.png" alt="pin" className="w-4 h-4" />
                  <span>{post?.address}</span>
                </div>
                <div className="p-[5px] bg-[rgba(254,205,81,0.438)]  rounded-[5px] w-max text-[16px] font-light">
                  $ {post?.price}
                </div>
              </div>
              <div className="hidden sm:flex flex-col items-center justify-center gap-[20px] px-[50px] py-0 sm:py-[20px] rounded-[10px] bg-[rgba(254,205,81,0.209)] text-sm font-semibold">
                <img
                  src={post?.user?.avatar || "/noavatar.jpg"}
                  alt="user"
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <span>{post?.user?.username}</span>
              </div>
            </div>
            <div className="mt-[20px] text-xs text-[#555] leading-5 mb-6">
              {post?.postDetail?.desc}
            </div>
          </div>
        </div>
      </div>

      {/**right side */}
      <div className="flex-none md:flex-[2] bg-[#fcf5f3] h-max mb-[50px] md:mb-[0px]  md:h-full overflow-y-scroll thin-scrollbar">
        <div className="md:py-0 md:px-[20px] p-[20px] flex flex-col gap-[10px]">
          <p className="font-bold text-[17px] mb-[5px]">General</p>
          <div className="flex flex-col gap-[15px] py-[10px] px-[10px] bg-white rounded-[10px]">
            <div className="feature">
              <img
                src="/utility.png"
                alt="utility"
                className="w-6 h-6 bg-[rgba(254,205,81,0.209)]"
              />
              <div>
                <span className="font-semibold text-sm">Utilities</span>
                {post?.postDetail?.utilities === "owner" ? (
                  <p className="text-[10px]">Owner is responsible</p>
                ) : (
                  <p className="text-[10px]">Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img
                src="/pet.png"
                alt="pet"
                className="w-6 h-6 bg-[rgba(254,205,81,0.209)]"
              />
              <div>
                <span className="font-semibold text-sm">Pet Policy</span>
                {post?.postDetail?.pet === "allowed" ? (
                  <p className="text-[10px]">Pets Allowed</p>
                ) : (
                  <p className="text-[10px]">Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img
                src="/fee.png"
                alt="fee"
                className="w-6 h-6 bg-[rgba(254,205,81,0.209)]"
              />
              <div>
                <span className="font-semibold text-sm">Property Fees</span>
                <p className="text-[10px]">
                  Must have {post?.postDetail?.income} the rent in total
                  household income
                </p>
              </div>
            </div>
          </div>
          <p className="font-bold text-[17px] mb-[5px]">Sizes</p>
          <div className="flex justify-between text-xs md:text-[12px]">
            <div className="flex items-center gap-[10px] bg-white p-[5px] rounded-[5px]">
              <img src="/size.png" alt="size" className="w-5 h-5" />
              <span>{post?.postDetail?.size} sqft</span>
            </div>
            <div className="flex items-center gap-[10px] bg-white p-[5px] rounded-[5px]">
              <img src="/bed.png" alt="bed" className="w-6 h-6" />
              <span>{post?.bedroom} beds</span>
            </div>
            <div className="flex items-center gap-[10px] bg-white p-[5px] rounded-[5px]">
              <img src="/bath.png" alt="bathtub" className="w-6 h-6" />
              <span>{post?.bathroom} bathroom</span>
            </div>
          </div>
          <p className="font-bold text-[17px] mb-[5px]">Nearby Places</p>
          <div className="flex justify-between py-[8px] px-[10px] bg-white rounded-[10px]">
            <div className="feature">
              <img
                src="/school.png"
                alt=" school"
                className="w-6 h-6 bg-[rgba(254,205,81,0.209)]"
              />
              <div>
                <span className="font-bold text-xs sm:text-sm">School</span>
                <p className="text-[9px] md:text-[12px]">
                  {post.postDetail.school > 999
                    ? (post.postDetail.school / 1000).toFixed(1) + " km"
                    : post.postDetail.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <GiBusStop className="w-6 h-7 bg-[rgba(254,205,81,0.209)]" />
              <div>
                <span className="font-bold text-xs sm:text-sm">Bus Stop</span>
                <p className="text-[9px] md:text-[12px]">
                  {post.postDetail.bus > 999
                    ? (post.postDetail.bus / 1000).toFixed(1) + " km"
                    : post.postDetail.bus + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <IoRestaurantOutline className="w-6 h-7 bg-[rgba(254,205,81,0.209)]" />
              <div>
                <span className="font-bold text-xs sm:text-sm">Restaurant</span>
                <p className=" text-[9px] md:text-[12px]">
                  {post.postDetail.restaurant > 999
                    ? (post.postDetail.restaurant / 1000).toFixed(1) + " km"
                    : post.postDetail.restaurant + "m"}{" "}
                  away
                </p>
              </div>
            </div>
          </div>
          <p className="font-bold text-[17px] mb-[10px]">Location</p>
          <div className="w-full h-[200px]">
            <Map items={[post]} />
          </div>
          <div className="flex justify-between mb-1 md:mb-3">
            <button
              className={`p-4 flex items-center gap-[5px] text-xs  border border-solid border-[#fece51] rounded-[5px]
                 ${ currentUser.id === post.userId? "cursor-not-allowed opacity-50" : "cursor-pointer" }
                 ${addChat ? "bg-[#fece51]" : "bg-white"} `}
                  onClick={handleAddChat}
                  disabled={currentUser.id === post.userId} >
                <img src="/chat.png" alt="chat" className="w-4 h-4" />
                 {addChat ? "Chat Added" : "Add to Chat"}
            </button>

            <button
              className="p-4 flex items-center gap-[5px] text-xs border border-solid border-[#fece51] rounded-[5px] cursor-pointer"
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/save.png" alt="save" className="w-4 h-4" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
