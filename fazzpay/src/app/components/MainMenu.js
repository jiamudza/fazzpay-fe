import React, { useEffect, useState } from "react";

//icons
import { RxDashboard } from "react-icons/rx";
import { RxPerson } from "react-icons/rx";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import {CiLogout} from "react-icons/ci"
import Link from "next/link";

//utils
import { usePathname } from "next/navigation";

export default function MainMenu() {
  const pathname = usePathname()

  // const [active, setActive] = useState(pathname)

  return (
    <div className="font-nunito bg-white mx-10 px-10 py-5 rounded-xl shadow-xl my-10 w-72">
      <div className={pathname.includes('home') === true ? "text-primary font-bold flex gap-3 my-10 cursor-pointer" : "text-slate-500 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"}>
        <RxDashboard size={20} />
        <Link href='/page/home' >Dashboard</Link>
      </div>
      <div className={pathname.includes('transfer') === true ? "text-primary font-bold flex gap-3 my-10 cursor-pointer" : "text-slate-500 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"}>
        <AiOutlineArrowUp size={20} />
        <Link href='/page/transfer' >Transfer</Link>
      </div>
      <div className={pathname.includes('topup') === true ? "text-primary font-bold flex gap-3 my-10 cursor-pointer" : "text-slate-500 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"}>
        <AiOutlinePlus size={20} />
        <Link href='/page/topup' >Top up</Link>
      </div>
      <div className={pathname.includes('profile') === true ? "text-primary font-bold flex gap-3 my-10 cursor-pointer" : "text-slate-500 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"}>
        <RxPerson size={20} />
        <Link href='/page/profile' >Profile</Link>
      </div>
      <div onClick={(e) => {
        e.preventDefault()

        localStorage.removeItem("@fazzLogin")
      }} className="text-slate-500 mt-40 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer">
        <CiLogout size={20} />
        <Link href='/' >Logout</Link>
      </div>


    </div>
  );
}
