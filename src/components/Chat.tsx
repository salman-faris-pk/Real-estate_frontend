import { useState } from "react";


export const Chat = () => {

  const [chat,setChat] = useState(false);

  return (
    <div className="h-full flex flex-col">
    <div className="flex flex-col gap-2 overflow-y-scroll pro-scrollbar h-[300px]  md:h-[220px] mb-6 md:mb-3">
      <h1 className="font-extralight text-lg md:text-xl mt-3 md:mt-0">Messages</h1>
      <div className="message" onClick={()=> setChat(true)}>
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="users"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-bold text-sm">John Doe</span>
        <p className="text-sm">Lorem ipsum dolor sit amet...</p>
      </div>
      <div className="message">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="userr"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-bold text-sm">John Doe</span>
        <p className="text-sm">Lorem ipsum dolor sit amet...</p>
      </div>
      <div className="message">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="user"
           className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-bold text-sm">John Doe</span>
        <p className="text-sm">Lorem ipsum dolor sit amet...</p>
      </div>
      <div className="message">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
           className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-bold text-sm">John Doe</span>
        <p className="text-sm">Lorem ipsum dolor sit amet...</p>
      </div>
      <div className="message">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
           className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-bold text-sm">John Doe</span>
        <p className="text-sm">Lorem ipsum dolor sit amet...</p>
      </div>
      
    </div>


    {chat && (
      <div className="flex-[1] bg-white flex flex-col justify-between">

        <div className="bg-[#f7c14b85] p-2 md:p-1 font-bold flex items-center justify-between rounded-sm">
          <div className="flex items-center gap-[20px]">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-[30px] h-[30px] rounded-full object-cover"
            />
            John Doe
          </div>
          <span className="cursor-pointer text-sm" onClick={()=>setChat(false)}>X</span>
        </div>

        <div className="h-[400px] md:h-[200px] overflow-scroll pro-scrollbar p-3 flex flex-col gap-[20px]">
          <div className="w-1/2">
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
            <span className="text-[8px] bg-[#f7c14b39] p-[2px] rounded-[5px]">1 hour ago</span>
          </div>
          <div className="w-1/2 self-end text-right">
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
            <span className="text-[8px] bg-[#f7c14b39] p-[2px] rounded-[5px]">1 hour ago</span>
          </div>
          <div className="w-1/2">
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
            <span className="text-[8px] bg-[#f7c14b39] p-[2px] rounded-[5px]">1 hour ago</span>
          </div>
          <div className="w-1/2 self-end text-right">
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
            <span className="text-[8px] bg-[#f7c14b39] p-[2px] rounded-[5px]">1 hour ago</span>
          </div>
          <div className="w-1/2">
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
            <span className="text-[8px] bg-[#f7c14b39] p-[2px] rounded-[5px]">1 hour ago</span>
          </div>
          <div className="w-1/2 self-end text-right">
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
            <span className="text-[8px] bg-[#f7c14b39] p-[2px] rounded-[5px]">1 hour ago</span>
          </div>
          <div className="w-1/2">
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
            <span className="text-[8px] bg-[#f7c14b39] p-[2px] rounded-[5px]">1 hour ago</span>
          </div>
          <div className="w-1/2 self-end text-right">
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
            <span className="text-[8px] bg-[#f7c14b39] p-[2px] rounded-[5px]">1 hour ago</span>
          </div>
          <div className="w-1/2">
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
            <span className="text-[8px] bg-[#f7c14b39] p-[2px] rounded-[5px]">1 hour ago</span>
          </div>
          <div className="w-1/2 self-end text-right">
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
            <span className="text-[8px] bg-[#f7c14b39] p-[2px] rounded-[5px]">1 hour ago</span>
          </div>
        </div>

        <div className="border-t-2 border-solid border-[#f7c14b85] h-[50px] md:h-[40px] flex items-center justify-between">
          <textarea className="flex-[3] h-full border-none outline-none p-2 text-xs text-black "></textarea>
          <button className="flex-[1] bg-[#f7c14b85] h-full font-mono border-none cursor-pointer">Send</button>
        </div>
      </div>
    )}


  </div>
  )
}
