

export const Filter = () => {
  return (
    <div className="flex flex-col gap-[10px]">
        <h1 className="font-thin text-[16px]">
          Search results for <b className="font-semibold">London</b>
        </h1>
        <div className="top">
           <div className="item">
             <label htmlFor="city">Location</label>
             <input 
              type="text"
              id="city"
              name="city"
              placeholder="City Location"
             />
           </div>
        </div>


        <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
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
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          />
        </div>
        <button className="w-[100px] p-[10px] flex items-center justify-center border-none cursor-pointer bg-[#fece51]">
          <img src="/search.png" alt="search" className="w-6 h-6"/>
        </button>
      </div>


    </div>
  )
}
