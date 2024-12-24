import { useState } from "react";
import { useSearchParams } from "react-router-dom"



export const Filter = () => {

  const [searchParams,setSearchParams]=useSearchParams();

  const [query,setQuery]=useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
     setQuery({...query, [e.target.name] : e.target.value})
  };

  const handleFilter=()=>{
     setSearchParams(query)
  }
  
  return (
    <div className="flex flex-col gap-[10px]">
        <h1 className="font-thin text-[16px]">
          Search results for <b className="font-semibold">{searchParams.get('city')}</b>
        </h1>
        <div className="top">
           <div className="item">
             <label htmlFor="city">Location</label>
             <input 
              type="text"
              id="city"
              name="city"
              placeholder="City Location"
              onChange={handleChange}
              defaultValue={query.city}
             />
           </div>
        </div>


        <div className="flex justify-between flex-wrap gap-[10px]">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type"  onChange={handleChange} defaultValue={query.type}>
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property"  onChange={handleChange} defaultValue={query.property}>
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.bedroom}
          />
        </div>

        <button className="w-[100px] p-[10px] flex items-center justify-center rounded-sm border-none cursor-pointer bg-[#fece51]"
          onClick={handleFilter}
        >
          <img src="/search.png" alt="search" className="w-6 h-6"/>
        </button>
       
      </div>
     


    </div>
  )
}
