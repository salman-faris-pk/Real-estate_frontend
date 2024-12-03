import { Card } from "../components/Card";
import { Filter } from "../components/Filter";
import { ListData, listData } from "../lib/datas"

export const ListPage = () => {

    const data:ListData[]=listData;


  return (
    <div className="flex h-full">
        <div className="flex-[3] h-full">
            <div className="h-full pr-[50px] pt-3 sm:pt-0 flex flex-col gap-[50px] overflow-y-scroll pb-[50px]">
                <Filter />
                {data.map(item=>(
                <Card key={item.id} item={item}/>
              ))}
            </div>
        </div>


        {/**right side */}
        <div className="flex-[2] h-full bg-[#fcf5f3] hidden md:block">
        
        </div>
       
    </div>
  )
}
