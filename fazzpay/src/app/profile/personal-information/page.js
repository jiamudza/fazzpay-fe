"use client";
import MainMenu from "../../..//app/components/MainMenu";
import Header from "../../../app/components/Header";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import FooterAfterLogin from "../../../app/components/FooterAfterLogin";
import { useSelector } from "react-redux";

export default function PersonalInformation() { 
  const router = useRouter();
  const {data} = useSelector(state=> state.userDataById)

  return (
    <div className="bg-[#e5e5e5]">
      <header className="px-10 py-6 bg-white">
        <Header />
      </header>
      <main className="flex mb-10">
        <aside className="hidden lg:block">
          <MainMenu />
        </aside>
        <div className='p-10 w-full m-10 bg-white rounded-xl shadow-2xl"'>
          <h4 className="font-bold">Personal Information</h4>
          <p className="text-sm text-slate-400 mt-5 w-80">
            We got your personal information from the sign up process. if you
            want to make changes on your information, contact our support
          </p>

          <div className="mt-10">
            <p className="text-sm mt-4 text-slate-400">First Name</p>
            <p className="font-bold mt-2">{data.first_name}</p>
            <p className="text-sm mt-4 text-slate-400">last_name Name</p>
            <p className="font-bold mt-2">{data.last_name}</p>
            <p className="text-sm mt-4 text-slate-400">Verified E-mail</p>
            <p className="font-bold mt-2 text-slate-400">{data.email}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm mt-4 text-slate-400">Phone Number</p>
                <p className="font-bold mt-2">{data.phone}</p>
              </div>
              <Link href="/profile/personal-information/number" className="text-primary text-sm font-bold">Manage</Link>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <FooterAfterLogin />
      </footer>
    </div>
  );
}
