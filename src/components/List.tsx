import { listData } from "../lib/datas"
import { Card } from "./Card"


export const List = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      {listData.map((item)=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}
