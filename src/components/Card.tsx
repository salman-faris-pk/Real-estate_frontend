import { Link } from "react-router-dom";
import { ListData } from "../lib/datas"



interface CardProps{
  item: ListData;
}

export const Card = ({item}:CardProps) => {
  return (
    <div className="flex gap-[20px]">
        <Link to={`/${item.id}`} className="flex-[2] h-[200px] hidden sm:block">
          <img src={item.img} alt={`${item.title}`} className="w-full h-full object-cover rounded-lg"/> 
        </Link>
        <div className="flex-[3] flex flex-col justify-between gap-[10px]">

            <h2 className="title">
            <Link to={`/${item.id}`}>{item.title}</Link>
            </h2>
            <p className="address">
            <img src="/pin.png" alt="" />
            <span>{item.address}</span>
            </p>
            <p className="price">$ {item.price}</p>
            
            <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>

        </div>
    </div>
  )
}
