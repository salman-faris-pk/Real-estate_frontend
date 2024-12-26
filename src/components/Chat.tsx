import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";
import { format } from "timeago.js";


export const Chat = ({chats}:any) => {

  const [chat, setChat] = useState<any | null>(null);
  const { currentUser }:any=useContext(AuthContext)

  const handleOpenChat=async(id:any, receiver:any)=>{
    try {
      const res= await apiRequest("/chat/"+id);
      // if(!res.data.seenBy.includes(currentUser.id)){

      // }

      setChat({...res.data, receiver});
      
    } catch (err) {
      console.log(err);
    }
  };


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async(e) =>{
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement)
      const text= formData.get("text")

      if (!text) return;

      try {
         
        const res= await apiRequest.post("/msg/"+ chat.id, { text });
        setChat((prev: any) => ({
          ...prev,
          messages: [...prev.messages, res.data],
        }));
        (e.target as HTMLFormElement).reset();

        
        
      } catch (err) {
        console.log(err);
      }
  };

  return (
    <div className="h-full flex flex-col">
    <div className="flex flex-col gap-2 overflow-y-scroll pro-scrollbar h-[300px]  md:h-[220px] mb-6 md:mb-3">
      <h1 className="font-extralight text-lg md:text-xl mt-3 md:mt-0">Messages</h1>
      {chats.map((cht:any)=>(
      <div className={`message ${cht.seenBy.includes(currentUser.id) ? "bg-white" : "bg-[#fecd514e]"}`} key={cht.id}
        onClick={() => handleOpenChat(cht.id, cht.receiver)}
      >
        <img
           src={cht.receiver.avatar || "/noavatar.jpg"}
          alt="users"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-bold text-sm">{cht.receiver.username}</span>
        <p className="text-sm">{cht.lastMessage}</p>
      </div>
      ))}

    </div>


    {chat && (
      <div className="flex-[1] bg-white flex flex-col justify-between">

        <div className="bg-[#f7c14b85] p-2 md:p-1 font-bold flex items-center justify-between rounded-sm">
          <div className="flex items-center gap-[20px]">
            <img
              src={chat.receiver.avatar || "/noavatar.jpg"}
              alt="avatr"
              className="w-[30px] h-[30px] rounded-full object-cover"
            />
              {chat.receiver.username}
          </div>
          <span className="cursor-pointer text-sm" onClick={()=>setChat(null)}>X</span>
        </div>

        <div className="h-[400px] md:h-[200px] overflow-scroll pro-scrollbar p-3 flex flex-col gap-[20px]">
          {chat.Messages.map((msg:any)=>(
          <div className={`w-1/2 ${msg.userId === currentUser.id ? "self-end text-right" : "self-start text-left"}`}  key={msg.id}>
            <p className="text-sm">{msg.text}</p>
            <span className="text-[8px] bg-[#f7c14b39] p-[2px] rounded-[5px]">{format(msg.createdAt)}</span>
          </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="border-t-2 border-solid border-[#f7c14b85] h-[50px] md:h-[40px] flex items-center justify-between">
          <textarea name="text" className="flex-[3] h-full border-none outline-none p-2 text-xs text-black "></textarea>
          <button className="flex-[1] bg-[#f7c14b85] h-full font-mono border-none cursor-pointer">Send</button>
        </form>
      </div>
    )}


  </div>
  )
}
