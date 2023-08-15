'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setNavbar] = useState(false)
  

  return (
    <header className="fixed right-0 left-0 h-[15vh] bg-white z-50 flex justify-between
      items-center py-[17px] px-[16px] md:pl-[70px] md:pr-[40px] md:py-[28px]"
    >
      <div className="w-[104px] h-[52px] relative ">
        <Image src='/logo.png' fill className="object-contain" alt="bella onojie"/>
      </div>
      <div className="gap-[94px] hidden md:flex">
         <Link href='/'>Home</Link>
         <Link href='/'>Product</Link>
         <Link href='/'>About</Link>
         <Link href='/'>Contact</Link>
      </div>
      <div className="flex justify-center items-center md:hidden">
        <button onClick={() => setNavbar(!isOpen)}>
          <Image src="/hamburger.png" width={40} height={40} alt="navigation"/>
        </button>
      </div>
      { isOpen && (
        <div className="absolute flex flex-col  -bottom-[160px] gap-[10px] py-[20px] text-center left-0 right-0 bg-white">
          <Link className="text-[16px] font-medium " href='/'>Home</Link>
          <Link className="text-[16px] font-medium" href='/'>Product</Link>
          <Link className="text-[16px] font-medium" href='/'>About</Link>
          <Link className="text-[16px] font-medium" href='/'>Contact</Link>
        </div>
      )}
    </header>
  )
}

export default Navbar