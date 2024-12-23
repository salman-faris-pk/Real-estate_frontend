import { Map } from "../components/Map"
import { GiBusStop } from "react-icons/gi";
import { IoRestaurantOutline } from "react-icons/io5";
import { Slider } from "../components/Slider";
import { useLoaderData} from "react-router-dom"




export const SinglePage = () => {

  const post=useLoaderData()
  // console.log(post);
 
 
  return (
    
    <div className="flex-col md:flex-row flex overflow-scroll thin-scrollbar md:overflow-hidden h-full ">
      {/**left side */}
    <div className="flex-none h-max mb-[50px] md:mb-[0px] md:flex-[3] md:h-full overflow-y-scroll thin-scrollbar">
      <div className="pr-[15px] sm:pr-[0px] md:pr-[20px]">
        <Slider images={post?.images} />
        <div className="mt-[50px]">
          <div className="flex-col gap-[20px] sm:gap-[0px] sm:flex-row flex justify-between">
            <div className="flex flex-col gap-[20px]">
              <h1 className="font-semibold text-[17px] md:text-[20px]">{post?.title}</h1>
              <div className="flex gap-[5px] items-center text-[#888] text-[12px]">
                <img src="/pin.png" alt="pin" className="w-4 h-4" />
                <span>{post?.address}</span>
              </div>
              <div className="p-[5px] bg-[rgba(254,205,81,0.438)]  rounded-[5px] w-max text-[16px] font-light">
                $ {post?.price}
              </div>
            </div>
            <div className="hidden sm:flex flex-col items-center justify-center gap-[20px] px-[50px] py-0 sm:py-[20px] rounded-[10px] bg-[rgba(254,205,81,0.209)] text-sm font-semibold">
              <img src={post?.user?.avatar} alt="user" className="w-[50px] h-[50px] rounded-full object-cover" />
              <span>{post?.user?.username}</span>
            </div>
          </div>
          <div className="mt-[20px] text-xs text-[#555] leading-5">{post?.postDetail?.desc}</div>
        </div>
      </div>
    </div>

    {/**right side */}
    <div className="flex-none md:flex-[2] bg-[#fcf5f3] h-max mb-[50px] md:mb-[0px]  md:h-full overflow-scroll thin-scrollbar">
      <div className="md:py-0 md:px-[20px] p-[20px] flex flex-col gap-[20px]">
        <p className="font-bold text-[17px] mb-[10px]">General</p>
        <div className="flex flex-col gap-[20px] py-[20px] px-[10px] bg-white rounded-[10px]">
          <div className="feature">
            <img src="/utility.png" alt="utility" className="w-6 h-6 bg-[rgba(254,205,81,0.209)]" />
            <div className="featureText">
              <span className="font-semibold text-sm">Utilities</span>
              <p className="text-[10px]">{post?.postDetail?.utilities}</p>
            </div>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="pet" className="w-6 h-6 bg-[rgba(254,205,81,0.209)]" />
            <div>
              <span className="font-semibold text-sm">Pet Policy</span>
              <p className="text-[10px]">{post?.postDetail?.pet}</p>
            </div>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="fee" className="w-6 h-6 bg-[rgba(254,205,81,0.209)]"/>
            <div>
              <span className="font-semibold text-sm">Property Fees</span>
              <p className="text-[10px]">Must have {post?.postDetail?.income} the rent in total household income</p>
            </div>
          </div>
        </div>
        <p className="font-bold text-[17px] mb-[10px]">Sizes</p>
        <div className="flex justify-between text-xs md:text-[12px]">
          <div className="flex items-center gap-[10px] bg-white p-[10px] rounded-[5px]">
            <img src="/size.png" alt="size" className="w-5 h-5"/>
            <span>{post?.postDetail?.size} sqft</span>
          </div>
          <div className="flex items-center gap-[10px] bg-white p-[10px] rounded-[5px]">
            <img src="/bed.png" alt="bed" className="w-6 h-6"/>
            <span>{post?.bedroom} beds</span>
          </div>
          <div className="flex items-center gap-[10px] bg-white p-[10px] rounded-[5px]">
            <img src="/bath.png" alt="bathtub" className="w-6 h-6"/>
            <span>{post?.bathroom} bathroom</span>
          </div>
        </div>
        <p className="font-bold text-[17px] mb-[10px]">Nearby Places</p>
        <div className="flex justify-between py-[20px] px-[10px] bg-white rounded-[10px]">
          <div className="feature">
            <img src="/school.png" alt=" school" className="w-6 h-6 bg-[rgba(254,205,81,0.209)]" />
            <div>
              <span className="font-bold text-xs sm:text-sm">School</span>
              <p className="text-[9px] md:text-[12px]">{post?.postDetail?.school}m away</p>
            </div>
          </div>
          <div className="feature">
            <GiBusStop className="w-6 h-7 bg-[rgba(254,205,81,0.209)]" />
            <div>
              <span className="font-bold text-xs sm:text-sm">Bus Stop</span>
              <p className="text-[9px] md:text-[12px]">{post?.postDetail?.bus}m away</p>
            </div>
          </div>
          <div className="feature">
            <IoRestaurantOutline className="w-6 h-7 bg-[rgba(254,205,81,0.209)]"/>
            <div>
              <span className="font-bold text-xs sm:text-sm">Restaurant</span>
              <p className=" text-[9px] md:text-[12px]">{post?.postDetail?.restaurant
              }m away</p>
            </div>
          </div>
        </div>
        <p className="font-bold text-[17px] mb-[10px]">Location</p>
        <div className="w-full h-[200px]">
          <Map items={post} />
        </div>
        <div className="flex justify-between">
          <button className="p-4 flex items-center gap-[5px] text-xs bg-white border border-solid border-[#fece51] rounded-[5px] cursor-pointer">
            <img src="/chat.png" alt="chat" className="w-4 h-4"/>
            Send a Message
          </button>
          <button className="p-4 flex items-center gap-[5px] text-xs bg-white border border-solid border-[#fece51] rounded-[5px] cursor-pointer">
            <img src="/save.png" alt="save" className="w-4 h-4"/>
            Save the Place
          </button>
        </div>
      </div>
    </div>

  </div>
  )
}
