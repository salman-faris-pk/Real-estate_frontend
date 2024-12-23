import apiRequest from "./apiRequest"

export const singlePageLoader= async({request, params}:any)=>{   
   const res= await  apiRequest.get(`/post/${params.id}`);
   return res.data;
};

export const ListPageLoader = async({request,params}:any)=>{

   const  query= request.url.split("?")[1];
   const postData = apiRequest.get("/post/?"+query)

   return ({
      postResponse:postData,
   });

}