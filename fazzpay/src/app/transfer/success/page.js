"use client";
import FooterAfterLogin from "@/app/components/FooterAfterLogin";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import Image from "next/image";
import MainMenu from "@/app/components/MainMenu";

import placeholder from "@/assets/img/placeholder.jpg"

import { BsFillCheckCircleFill } from "react-icons/bs";
import {BiDownload} from "react-icons/bi"
import Header from "@/app/components/Header";

export default function Confirmation() {
  const router = useRouter()

  const [userData, setUserData] = useState({})

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const [pinBox, setPinBox] = useState(false);
  useEffect(() => {
    if(sessionStorage.getItem('@session')) {
      setUserData(JSON.parse(sessionStorage.getItem("@session")))
    }
  }, [])

  const handleBack = (e) => {
    e.preventDefault()

    sessionStorage.removeItem('@session')
    router.push('/home')
  }

  return (
    <div
      className={
        pinBox === true
          ? "overflow-hidden"
          : "overflow-visible" + " bg-[#e5e5e5]"
      }
    >
      <div className="px-10 py-6 bg-white">
        <Header />
      </div>
      <main className="flex">
        <div className="hidden lg:block">
          <MainMenu />
        </div>
        <div className="m-10 p-10 rounded-xl shadow-2xl w-full bg-white">
          <BsFillCheckCircleFill
            size={50}
            color={"green"}
            className="text-center mx-auto"
          />
          <p className="text-bold text-center font-bold mt-2">
            Transfer Success
          </p>

          <div className="mt-5">
            <p className="text-slate-400 text-sm">Amount</p>
            <p className="font-bold">{rupiah(userData.amount)}</p>
          </div>
          <div className="mt-5">
            <p className="text-slate-400 text-sm">Balance Left</p>
            <p className="font-bold">{rupiah(userData.balance)}</p>
          </div>
          <div className="mt-5">
            <p className="text-slate-400 text-sm">Date & Time</p>
            <p className="font-bold">{userData.date}</p>
          </div>
          <div className="mt-5">
            <p className="text-slate-400 text-sm">Notes</p>
            <p className="font-bold">{userData.notes}</p>
          </div>

          <div className="mt-5 flex items-center gap-5">
            <Image
              src={userData.image === null ? placeholder : userData.image}
              width={100}
              height={100}
              alt="receiver-image"
              className="h-10 w-10 rounded-lg bg-primary"
            />
            <div>
              <p className="font-bold">{userData.name}</p>
              <p className="text-sm text-slate-400">{userData.phone}</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end gap-3">
            <button className="button-primary-reverse mt-10 flex gap-2 text-sm lg:text-base">
              <BiDownload size={20}/> Download PDF
            </button>
            <Link
            onClick={handleBack}
            href={'/home'}
              className="button-primary text-sm lg:text-base mt-10"
            >
              Back Home
            </Link>
          </div>
        </div>
      </main>
      <div>
        <FooterAfterLogin />
      </div>
    </div>
  );
}
