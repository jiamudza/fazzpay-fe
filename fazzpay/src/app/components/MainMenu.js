import React, { useEffect, useState } from "react";

//icons
import { RxDashboard } from "react-icons/rx";
import { RxPerson } from "react-icons/rx";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

//utils
import { usePathname } from "next/navigation";

export default function MainMenu() {
  const pathname = usePathname()

  // const [active, setActive] = useState(pathname)

  return (
    <div className="font-nunito">
      <div className={pathname === '/page/home' ? "text-primary font-bold flex gap-3 my-10 cursor-pointer" : "text-slate-500 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"}>
        <RxDashboard size={20} />
        <p>Dashboard</p>
      </div>
      <div className={pathname === '/page/transfer' ? "text-primary font-bold flex gap-3 my-10 cursor-pointer" : "text-slate-500 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"}>
        <AiOutlineArrowUp size={20} />
        <p>Transfer</p>
      </div>
      <div className={pathname === '/page/topup' ? "text-primary font-bold flex gap-3 my-10 cursor-pointer" : "text-slate-500 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"}>
        <AiOutlinePlus size={20} />
        <p>Top Up</p>
      </div>
      <div className={pathname === '/page/profile' ? "text-primary font-bold flex gap-3 my-10 cursor-pointer" : "text-slate-500 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"}>
        <RxPerson size={20} />
        <p>Profile</p>
      </div>
    </div>
  );
}
