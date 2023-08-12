"use client";
import HeaderAfterLogin from "@/app/components/HeaderAfterLogin";
import MainMenu from "@/app/components/MainMenu";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Image from "next/image";
import Link from "next/link";
import { RxPencil1 } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";

import placeholder from '../../../assets/img/placeholder.jpg'
export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("@fazzLogin")) {
      axios
        .get(
          `https://fazz.adaptable.app/api/v1/user/${
            JSON.parse(localStorage.getItem("@fazzLogin")).user.user_id
          }`
        )
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((err) => err);
    }
  }, []);

  const handleImage = (e) => {
    const formData = new FormData();
    formData.append("userImage", e.target.files[0]);
    console.log(e.target.files[0]);
    axios({
      url: `https://fazz.adaptable.app/api/v1/user/image/${user.user_id}`,
      method: "PATCH",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => res.data.data)
      .catch((err) => console.log(err.message));

      location.reload()
  };
  return (
    <div className="bg-[#e5e5e5] font-nunito">
      <header className="px-10 py-6 bg-white">
        <HeaderAfterLogin />
      </header>
      <main className="flex mb-10">
        <aside>
          <MainMenu />
        </aside>

        {/* main content */}
        <div className="flex flex-col content-center items-center p-10 w-full m-10 bg-white rounded-xl shadow-xl">
        {user.user_image === null ? (
              <Image
                src={placeholder}
                width={200}
                height={200}
                alt="user-image"
                className="h-20 w-20 rounded-lg bg-primary"
              />
            ) : (
              <Image
                src={user.user_image}
                width={200}
                height={200}
                alt="user-image"
                className="h-20 w-20 rounded-lg bg-primary"
              />
            )}
          <label
            htmlFor="userImage"
            className="text-sm text-slate-400 flex content-center justify-center items-center gap-1 cursor-pointer"
          >
            <RxPencil1 />
            edit
          </label>
          <input
            onChange={handleImage}
            id="userImage"
            name="userImage"
            type="file"
            className="mx-auto text-center opacity-0 absolute -z-10"
          />
          <p className="font-bold mt-5">{`${user.first_name} ${user.last_name}`}</p>
          <p className="text-sm text-slate-400">{user.phone}</p>

          <div className="mt-4">
            <Link href="/page/profile/personal-information" className="font-bold text-sm mt-2 bg-slate-300 w-80 flex justify-between px-2 rounded-lg py-3">
              Personal Information
              <BsArrowRight size={20} />
            </Link>
            <Link href="/page/profile/change-password" className="font-bold text-sm mt-4 bg-slate-300 w-80 flex justify-between px-2 rounded-lg py-3">
              Change Password
              <BsArrowRight size={20} />
            </Link>
            <Link href="/page/profile/change-pin" className="font-bold text-sm mt-4 bg-slate-300 w-80 flex justify-between px-2 rounded-lg py-3">
              Change PIN
              <BsArrowRight size={20} />
            </Link>
            <Link href="/" onClick={() => {
              localStorage.removeItem('@fazzLogin')
            }} className="font-bold text-sm mt-4 bg-slate-300 w-80 flex justify-between px-2 rounded-lg py-3">
              Logout
              <BsArrowRight size={20} className="text-slate-300" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}