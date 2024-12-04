import { Link } from "react-router-dom"
import { ListData } from "../lib/datas"
import { MapContainer, Marker, Popup, TileLayer,} from 'react-leaflet'
import "leaflet/dist/leaflet.css";


interface mapItemsProps{
    items:ListData[]
}

export const Map = ({items}: mapItemsProps) => {

  return (
    <MapContainer center={[12.2602, 77.1461]} zoom={6} scrollWheelZoom={false} className="w-full h-full rounded-tl-md rounded-tr-md">
     <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />

     {items.map((item)=>(
        <Marker position={[item.latitude,item.longitude]} key={item.id}>
            <Popup>
                <div className="flex flex-grow  gap-[20px]">
                   <img src={item.img} alt="property" className="w-16 h-12 object-cover rounded-[5px]" />
                   <div className="flex flex-col justify-between">
                     <Link to={`/list/${item.id}`}>
                       {item.title}
                     </Link>
                      <span>{item.bedroom} bedroom</span>
                      <b>$ {item.price}</b>
                   </div>
                </div>

            </Popup>
        </Marker>
     ))}

    </MapContainer>
  )
}
