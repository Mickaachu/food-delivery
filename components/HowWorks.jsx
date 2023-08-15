import Image from "next/image"

const HowWorks = () => {
  return (
    <div className=" text-center " >
        <div className="flex flex-col md:flex-col-reverse justify-center items-center gap-[65px] md:gap-[72px] md:pt-[180px]">
            <h2 className="font-semibold text-[24px] md:text-[44px]">How the app works</h2>
            <div className="w-full max-w-[884px] h-[3px] bg-gray-200"></div>
        </div>

        <div className="flex flex-col text-center lg:text-left md:flex-row-reverse justify-center items-center  ">
            <div className="flex flex-col gap-[40px] px-[38px] pt-[65px] md:max-w-[581px]">
                <h3 className="text-orange-500 text-[18px] font-bold">
                    Create an account
                </h3>
                <h2 className="text-[30px] font-bold">
                    Create/login to an existing account to get started
                </h2>
                <p className="text-gray-400 font-medium text-[18px]">An account is created with your email and a desired password</p>
            </div>
            <div className="py-[50px] px-[30px] relative w-full max-w-[700px] h-[500px]">
                <Image src="/how-works.png" fill className="object-contain" alt="log in to app"/>
            </div>
        </div>
    </div>
  )
}

export default HowWorks