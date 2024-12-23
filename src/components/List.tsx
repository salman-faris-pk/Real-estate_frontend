import { Card } from "./Card"


export const List = ({posts}:any) => {
  return (
    <div className="flex flex-col gap-[50px]">
      {posts&&posts.map((item:any)=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}
