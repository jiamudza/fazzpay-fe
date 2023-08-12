"use client";
import HeaderAfterLogin from "@/app/components/HeaderAfterLogin";
import MainMenu from "@/app/components/MainMenu";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import Link from "next/link";

export default function PersonalInformation() {
  const [user, setUser] = useState({}); 
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("@fazzLogin")) {
      axios({
        url: `https://fazz.adaptable.app/api/v1/user/${
          JSON.parse(localStorage.getItem("@fazzLogin")).user.user_id
        }`,
        method: "GET",
      })
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((err) => console.log(err));
    } else {
      router.push("/page/login");
    }
  }, []);

  return (
    <div className="bg-[#e5e5e5]">
      <header className="px-10 py-6 bg-white">
        <HeaderAfterLogin />
      </header>
      <main className="flex mb-10">
        <aside>
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
            <p className="font-bold mt-2">{user.first_name}</p>
            <p className="text-sm mt-4 text-slate-400">First Name</p>
            <p className="font-bold mt-2">{user.last_name}</p>
            <p className="text-sm mt-4 text-slate-400">Verified E-mail</p>
            <p className="font-bold mt-2 text-slate-400">{user.email}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm mt-4 text-slate-400">Phone Number</p>
                <p className="font-bold mt-2">{user.phone}</p>
              </div>
              <Link href="/page/profile/change-number" className="text-primary text-sm font-bold">Manage</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}