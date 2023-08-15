const Hero = () => {
  return (
    <div
        className="w-screen h-[100vh] 
        md:bg-[url('/hero-bg.jpg')] bg-cover
        bg-no-repeat bg-center text-black md:text-white
        "
    >
       <div className="flex justify-center flex-col gap-[24px] pt-[300px] md:pt-[100px]
            items-center h-full w-screen md:backdrop-brightness-[.6] text-center">
            <p className="font-bold text-[16px] md:text-[28px]">Food App</p>
            <h1 className="max-w-[700px] text-[36px] md:text-[58px] font-bold">
                Why stay hungry when you can order form Bella Onojie
            </h1>
            <p className="text-gray-500 md:text-gray-200">Download the bella onoje’s food app now on</p>
            <div className="flex flex-col md:flex-row gap-[34px] mt-[30px] ">
                <button className="rounded-full text-[24px] text-white font-bold bg-orange-600 py-[16px] px-[58.5px]">
                    Playstore
                </button>
                <button className="rounded-full text-[24px] border py-[16px] font-bold px-[58.5px]">
                    App Store
                </button>
            </div>
       </div>
    </div>
  )
}

export default Hero