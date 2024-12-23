import ReactQuill from  'react-quill'
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { UploadWidget } from '../components/uploadWidget/UploadWidget';
import apiRequest from '../lib/apiRequest';
import { useNavigate } from 'react-router-dom';
import { htmlToText } from 'html-to-text';


export const AddPost = () => {
  
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading,setLoading]=useState(false)

  const navigate=useNavigate();

   const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{

      e.preventDefault();
       setLoading(true)

      const formData=new FormData(e.target as HTMLFormElement)
      
      const inputs : Record<string, string>= {};
        formData.forEach((value, key)=> {
           if(typeof value === "string"){
            inputs[key] = value;
           }else{
            console.error(`Unexpected file input for key: ${key}`);
           }
        });
          

     try {
    
       const res=await apiRequest.post("/post/add-post",{
        postData:{
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
          postDetail: {
            desc: htmlToText(value),
            utilities: inputs.utilities,
            pet: inputs.pet,
            income: inputs.income,
            size: parseInt(inputs.size),
            school: parseInt(inputs.school),
            bus: parseInt(inputs.bus),
            restaurant: parseInt(inputs.restaurant),
          },
        
      });
       
      if(res.status === 200){
         navigate('/list/'+res.data.id)
         setLoading(false)
      }

     } catch (err:any) {
      console.log(err);
      setError(error);
      setLoading(false)
     }
      
   }

  return (
    <div className='h-full sm:flex flex-col sm:flex-row overflow-y-scroll thin-scrollbar md:overscroll-none '>

      <div className='flex-[3] md:h-full md:overflow-y-scroll thin-scrollbar'>
        <h1>Add New Post</h1>
        <div className="mt-[30px] mr-[50px] mb-[100px]">
        <form onSubmit={handleSubmit} className='flex justify-between flex-wrap gap-[20px]'>

            <div className="form-item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" className='p-3 rounded-[5px] border border-solid border-gray-600' required/>
            </div>
            <div className="form-item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" min={500} className='p-3 rounded-[5px] border border-solid border-gray-600' required/>
            </div>
            <div className="form-item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" className='p-3 rounded-[5px] border border-solid border-gray-600' required/>
            </div>
        
            <div className="flex flex-col gap-1 w-full h-[320px] mb-10 sm:mb-8 md:mb-0">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} className='quill'/>
            </div>

            <div className="form-item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" className='p-3 rounded-[5px] border border-solid border-gray-600'/>
            </div>
            <div className="form-item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" className='p-3 rounded-[5px] border border-solid border-gray-600' required/>
            </div>
            <div className="form-item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" className='p-3 rounded-[5px] border border-solid border-gray-600' required/>
            </div>
            <div className="form-item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" className='p-3 rounded-[5px] border border-solid border-gray-600' required/>
            </div>
            <div className="form-item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" className='p-3 rounded-[5px] border border-solid border-gray-600' required/>
            </div>
            <div className="form-item">
              <label htmlFor="type">Type</label>
              <select name="type" className='p-[19px]'>
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="form-item">
              <label htmlFor="type">Property</label>
              <select name="property" className='p-[19px]'>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="form-item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities" className='p-[19px]'>
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="form-item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" className='p-[19px]'>
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="form-item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
                className='p-3 rounded-[5px] border border-solid border-gray-600'
              />
            </div>
            <div className="form-item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" className='p-3 rounded-[5px] border border-solid border-gray-600'/>
            </div>
            <div className="form-item">
              <label htmlFor="school">School(m)</label>
              <input min={0} id="school" name="school" type="number" className='p-3 rounded-[5px] border border-solid border-gray-600'/>
            </div>
            <div className="form-item">
              <label htmlFor="bus">bus(m)</label>
              <input min={0} id="bus" name="bus" type="number" className='p-3 rounded-[5px] border border-solid border-gray-600'/>
            </div>
            <div className="form-item">
              <label htmlFor="restaurant">Restaurant(m)</label>
              <input min={0} id="restaurant" name="restaurant" type="number" className='p-3 rounded-[5px] border border-solid border-gray-600'/>
            </div>
             {loading ? (
            <button className="w-full md:w-[30%] p-3 md:p-0  rounded-[5px] border-none bg-teal-600 text-white font-bold cursor-pointer">posting...</button>
             ):(
            <button className="w-full md:w-[30%] p-3 md:p-0  rounded-[5px] border-none bg-teal-600 text-white font-bold cursor-pointer">Add</button>
             )}
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>

      {/**sideContainer */}

       <div className='flex-[2] w-full bg-[#fcf5f3] sm:bg-white md:bg-[#fcf5f3] flex flex-col gap-5 items-center justify-center mb-3 md:mb-0 py-4 md:py-0'>
        {images.map((image, index) => (
          <img src={image} key={index} alt="images.." className='w-52 h-[90px] object-cover rounded-[5px]'/>
        ))}

        <UploadWidget
          uwConfig={{
            cloudName: "dqqcpkeup",
            uploadPreset: "estate",
            multiple: true,
            maxImageFileSize: 2000000,
            folder: "posts",
          }}
          setState={setImages}
        />
       </div>

    </div>
  )
}
