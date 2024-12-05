import { useState } from "react";



interface Imgaresprops{
    images:string[]
}

export const Slider = ({images}:Imgaresprops) => {

    const [imageIndex, setImageIndex] = useState<null | number>(null);

  const changeSlide = (direction : string) => {
       
    if (imageIndex === null) return;

    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="h-[280px] sm:h-[350px] flex gap-[20px] w-full">

     {/**slider */}
    {imageIndex !== null && (
      <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-black flex justify-between items-center z-50">
        <div className="flex-[1] flex items-center justify-center" 
          onClick={() => changeSlide("left")}>
          <img src="/arrow.png" alt="arrowL" className="w-[20px] md:w-[30px] lg:w-[50px]"/>
        </div>
        <div className="flex-[10]">
          <img src={images[imageIndex]} alt="main-img" className="w-full h-full object-cover"/>
        </div>
        <div className="flex-[1] flex items-center justify-center" 
          onClick={() => changeSlide("right")}>
          <img src="/arrow.png" className="w-[20px] md:w-[30px] lg:w-[50px] transform rotate-180" alt="arrowR" />
        </div>
        <div className="absolute top-0 right-0 text-white text-[36px] font-bold p-[50px] cursor-pointer" 
          onClick={() => setImageIndex(null)}>
          X
        </div>
      </div>
    )}

    {/** list page images*/}
    <div className="flex-[2] sm:flex-[3]">
      <img src={images[0]} alt="" onClick={() => setImageIndex(0)} className="w-full h-full object-cover rounded-md"/>
    </div>
    <div className="flex-[1] flex flex-col justify-between gap-[20px]">
      {images.slice(1).map((image, index) => (
        <img
          src={image}
          alt="all"
          key={index}
          onClick={() => setImageIndex(index + 1)}
          className="h-[80px] sm:h-[100px] rounded-md"
        />
      ))}
    </div>

  </div>
  )
}
