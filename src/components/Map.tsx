import { Link } from "react-router-dom"
import { MapContainer, Marker, Popup, TileLayer,} from 'react-leaflet'
import "leaflet/dist/leaflet.css";




export const Map = ({items}:any) => {
 
  return (
    <MapContainer center={[12.2602, 77.1461]} zoom={6} scrollWheelZoom={false} className="w-full h-full rounded-tl-md rounded-tr-md">
     <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />


        <Marker position={[items?.latitude,items?.longitude]} key={items?.id}>
            <Popup>
                <div className="flex flex-grow  gap-[20px]">
                   <img src={items?.images[0]} alt="property" className="w-16 h-12 object-cover rounded-[5px]" />
                   <div className="flex flex-col justify-between">
                     <Link to={`/list/${items?.id}`}>
                       {items?.title}
                     </Link>
                      <span>{items?.bedroom} bedroom</span>
                      <b>$ {items?.price}</b>
                   </div>
                </div>

            </Popup>
        </Marker>
     

    </MapContainer>
  )
}
