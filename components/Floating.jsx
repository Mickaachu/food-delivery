import Image from "next/image"
const Floating = () => {
  return (
    <div className="flex justify-center mt-[200px] md:mt-0 xl:mt-[70px]">
        <div className="w-[230px] md:w-[300px] xl:w-[400px] h-[451px]  md:h-[530px] xl:h-[630px]  relative">
            <Image src='/Floating1.png' fill 
                className="object-contain  ml-[30px]" 
                alt="food for everyone"
              />
        </div>
        <div className="w-[219px] md:w-[286px] h-[408px] md:h-[532px] relative">
            <Image src='/Floating2.png' fill 
            className="object-contain mt-[82px]" 
            alt="delicious food for you"
            />
        </div>
    </div>
  )
}

export default Floating