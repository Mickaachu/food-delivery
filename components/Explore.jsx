import Image from "next/image"

const Explore = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
        

        <div className="flex flex-col text-center lg:text-right md:flex-row justify-between items-center ">
            <div className="flex flex-col gap-[40px] px-[38px] pt-[65px] md:max-w-[581px]">
                <h3 className="text-orange-500 text-[18px] font-bold">
                    Explore varieties
                </h3>
                <h2 className="text-[30px] font-bold">
                Shop for your favorites meal as e dey hot.
                </h2>
                <p className="text-gray-400 font-medium text-[18px]">Shop for your favorite meals or drinks and enjoy while doing it.</p>
            </div>
            <div className="py-[50px] px-[30px] relative w-full max-w-[700px] h-[500px]">
                <Image src="/explore.png" fill className="object-contain" alt="log in to app"/>
            </div>
        </div>
    </div>
  )
}

export default Explore