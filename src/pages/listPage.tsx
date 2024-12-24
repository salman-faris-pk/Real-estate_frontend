import { Await, useLoaderData } from "react-router-dom";
import { Card } from "../components/Card";
import { Filter } from "../components/Filter";
import { Map } from "../components/Map";
import { Suspense } from "react";


export const ListPage = () => {

    const data=useLoaderData()

  return (
    <div className="flex h-full">
        <div className="flex-[3] h-full">
            <div className="h-full pr-[50px] pt-3 sm:pt-0 flex flex-col gap-[50px] overflow-y-scroll thin-scrollbar pb-[50px]">
                <Filter />
                <Suspense fallback={<p>Loading...</p>}>
                  <Await
                   resolve={data.postResponse}
                   errorElement={<p>Error loading posts!</p>}
                  >
                    {(postResponse)=> 
                       postResponse.data.map((post:any)=>(
                        <Card key={post.id} item={post}/>
                       ))
                    }
              </Await>
              </Suspense>
            </div>
        </div>


        {/**right side */}
        <div className="flex-[2] h-full bg-[#fcf5f3] hidden sm:block">
           <Suspense fallback={<p>Loading...</p>}>
            <Await
               resolve={data.postResponse}
               errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <Map items={postResponse.data}/>}

            </Await>
           </Suspense>

           
        </div>
       
    </div>
  )
}
