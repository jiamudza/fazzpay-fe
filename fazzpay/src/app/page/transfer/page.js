"use client";
import FooterAfterLogin from "@/app/components/FooterAfterLogin";
import HeaderAfterLogin from "@/app/components/HeaderAfterLogin";
import MainMenu from "@/app/components/MainMenu";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

//icons
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Transfer from "./transfer1/Transfer";
import TransferAmount from "./transfer1/TransferAmount";
import Confirmation from "./transfer1/Confirmation";
import PinConfirm from "./transfer1/PinConfirm";

export default function page() {

  const [pinModal, setPinModal] = useState('hidden')

  return (
    <div className="bg-[#e5e5e5]">
      <header className="px-10 py-6 bg-white">
        <HeaderAfterLogin />
      </header>
      <main className="lg:flex mb-10">
        <div className="bg-white lg:mx-10 px-10 py-5 rounded-xl shadow-xl my-10 w-72 mx-auto">
          <MainMenu />
        </div>
        <div className="bg-white rounded-xl p-10 mt-10 w-full lg:mx-10 mx-auto">
            <Confirmation />
        </div>

        <div className="absolute z-10 w-full">
        <PinConfirm />
        </div>
        
      </main>

      <FooterAfterLogin />
    </div>
  );
}
