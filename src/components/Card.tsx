import { Link } from "react-router-dom";
import { ListData } from "../lib/datas"



interface CardProps{
  item: ListData;
}

export const Card = ({item}:CardProps) => {
  return (
    <div className="flex gap-[20px] pb-1    ">
         <Link to={`/list/${item.id}`} className="flex-[2] h-[200px] hidden sm:block">
          <img src={item.img} alt={`${item.title}`} className="w-full h-full object-cover rounded-[10px]"/> 
         </Link>
          <div className="flex-[3] flex flex-col justify-between gap-[10px]">

            <h2 className="text-[16px] font-semibold text-[#444] transition-all duration-300 ease-in-out hover:text-[#000 hover:scale-105]">
            <Link to={`/list/${item.id}`}>{item.title}</Link>
            </h2>
            <p className="text-[14px] flex items-center gap-[5px] text-[#888]">
            <img src="/pin.png" alt="pin" className="w-4 h-4"/>
            <span>{item.address}</span>
            </p>
            <p className="text-[15px] font-light p-[5px] rounded-[5px] bg-yellow-300/50 w-max">
                $ {item.price}
            </p>
            
          <div className="flex justify-between gap-[10px]">
             <div className="flex gap-[20px] text-[14px]">
             <div className="flex items-center gap-[5px] bg-[#f5f5f5] p-[5px] rounded-[5px]">
              <img src="/bed.png" alt="bed" className="w-4 h-4"/>
              <span className="text-xs">{item.bedroom} bedroom</span>
             </div>
             <div className="flex items-center gap-[5px] bg-[#f5f5f5] p-[5px] rounded-[5px]">
              <img src="/bath.png" alt="bathtub" className="w-4 h-4"/>
              <span className="text-xs">{item.bathroom} bathroom</span>
             </div>
             </div>
             <div className="flex gap-[20px]">
              <div className="border border-[#999] px-[5px] py-[2px] rounded-[5px] cursor-pointer flex items-center justify-center hover:bg-[#d3d3d3]">
              <img src="/save.png" alt="save" className="w-4 h-4"/>
             </div>
             <div className="border border-[#999] px-[5px] py-[2px] rounded-[5px] cursor-pointer flex items-center justify-center hover:bg-[#d3d3d3]">
              <img src="/chat.png" alt="chat" className="w-4 h-4"/>
            </div>
           </div>
        </div>

        </div>
    </div>
  )
}
