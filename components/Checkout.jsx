import Image from "next/image"

const Checkout = () => {
  return (
    <div  className="flex flex-col justify-center items-center ">
        

        <div className="flex flex-col text-center lg:text-left md:flex-row-reverse justify-between items-center ">
            <div className="flex flex-col gap-[40px] px-[38px] pt-[65px] md:max-w-[581px]">
                <h3 className="text-orange-500 text-[18px] font-bold">
                    Checkout
                </h3>
                <h2 className="text-[30px] font-bold">
                    When you done check out and get it delivered.
                </h2>
                <p className="text-gray-400 font-medium text-[18px]">When you done check out and get it  delivered with ease.</p>
            </div>
            <div className="py-[50px] px-[30px]  relative w-full max-w-[700px] h-[500px] mb-[100px]">
                <Image src="/checkout.png" fill className="object-contain" alt="log in to app"/>
            </div>
        </div>
    </div>
  )
}

export default Checkout