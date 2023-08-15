import Image from "next/image"
const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center pt-[60px] pb-[40px] px-[118px] md:px-[160px] md:py-[53px]">
      <div className="hidden md:block">
        <Image src='/logo.png' width={246} height={102} alt="logo"/>
      </div>
      <div className="flex items-center gap-[28px]">
            <Image src='/facebook.png' width={40} height={40} alt="facebook" className="object-contain"/>
            <Image src='/twitter.png' width={40} height={40} alt="twitter" className="object-contain"/>
            <Image src='/instagram.png' width={40} height={40} alt="instagram" className="object-contain"/>
        </div>
      <div>
        
        <p className="text-[12px] text-center">
          Copywright 2020 Bella Onojie.com
        </p>
      </div>
      

    </footer>
  )
}

export default Footer