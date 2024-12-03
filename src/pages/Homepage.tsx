import SearchBar from "../components/SearchBar"

export const Homepage = () => {
  return (
    <div className="flex h-full bg-[#fcf5f3] bg-opacity-15 sm:bg-opacity-100 sm:bg-white">
        <div className="flex-[3]">
          <div className="flex flex-col sm:justify-start justify-center items-center sm:pe-16 pt-16">
             <h1 className="text-[28px] sm:text-[36px] font-semibold lg:text-[44px]">Find Real Estate & Get Your Dream Place</h1>
             <p className="text-xs sm:text-sm mt-7 sm:mt-2 text-gray-500">
               Explore a world of opportunities to find your dream home or investment property. Discover real estate that fits your lifestyle and budget, with expert guidance every step of the way. Start your journey to the perfect place today!
             </p>

            <SearchBar />
            
            <div className="grid gap-y-5 sm:grid-cols-3  sm:gap-x-16 mt-16 sm:mt-7">
            <div>
              <h1 className="text-[24px] lg:text-[32px] font-semibold">16+</h1>
              <h2 className="text-[12px] font-extralight">Years of Experience</h2>
            </div>
            <div>
              <h1 className="text-[24px] lg:text-[32px] font-semibold">200</h1>
              <h2 className="text-[12px] font-extralight">Award Gained</h2>
            </div>
            <div>
              <h1 className="text-[24px] lg:text-[32px] font-semibold">2000+</h1>
              <h2 className="text-[12px] font-extralight">Property Ready</h2>
            </div>

            </div>
          </div>

        </div>


        {/**image container */}
        <div className="flex-[2] bg-[#fcf5f3] relative hidden sm:block">
           <img src="/bg.png" alt="hero-bg" className="w-[115%] lg:w-[105%] absolute right-0"/>
        </div>
    </div>
  )
}
