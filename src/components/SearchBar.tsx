import { useState } from "react";
import { Link } from "react-router-dom"




const types: string[] = ["buy", "rent"];

const SearchBar = () => {

  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val: string) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setQuery((prev)=> ({...prev, [e.target.name]: e.target.value}));
  }

  return (
    <div className="mt-7">
      <div className="-ms-10 sm:ms-0">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`px-4 py-2 border border-gray-400 border-b-0 cursor-pointer capitalize ${
              query.type === type ? "bg-black text-white" : ""
            } ${
              type === types[0]
                ? "rounded-tl-md border-r-0"
                : type === types[types.length - 1]
                ? "rounded-tr-md border-l-0"
                : ""
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <form className="flex flex-col sm:flex-row sm:justify-between gap-3 border border-black/30 shadow-sm shadow-slate-100 sm:h-14">
        <input
          type="text"
          name="city"
          placeholder="City"
           onChange={handleChange}
          className="px-5 py-2 sm:py-0 outline-none text-xs sm:text-sm w-full sm:w-auto"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
          className="px-5 sm:px-3 outline-none text-xs sm:text-sm py-1 sm:py-0 w-full sm:w-auto"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          onChange={handleChange}
          placeholder="Max Price"
          className="px-5 sm:px-3 outline-none text-xs sm:text-sm py-1 sm:py-0 w-full sm:w-auto"
        />
         
         <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
        <button className="flex items-center justify-center bg-[rgb(16,3,72)] sm:bg-[#fece51] cursor-pointer border-none h-full px-5 py-1 md:py-0 sm:w-auto w-full">
          <img src="/search.png" alt="search" className="w-6 h-6" />
        </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
