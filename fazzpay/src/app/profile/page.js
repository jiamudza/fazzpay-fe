"use client";
import MainMenu from "../../components/MainMenu";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Image from "next/image";
import Link from "next/link";
import { RxPencil1 } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";

import placeholder from '../../assets/img/placeholder.jpg'
import Header from "../../components/Header";
import FooterAfterLogin from "../../components/FooterAfterLogin";
import { useSelector } from "react-redux";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
export default function Profile() {
  const router = useRouter()
  const {data} = useSelector(state => state.userDataById)

  const handleImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userImage", e.target.files[0]);
    axios({
      url: `https://fazz.adaptable.app/api/v1/user/image/${data.user_id}`,
      method: "PATCH",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        location.reload()
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="bg-[#e5e5e5] font-nunito">
      <header className="px-10 py-6 bg-white">
        <Header />
      </header>
      <main className="flex mb-10">
        <aside className="hidden lg:block">
          <MainMenu />
        </aside>

        {/* main content */}
        <div className="flex flex-col content-center items-center p-10 w-full m-10 bg-white rounded-xl shadow-xl">


              {<Image
                src={!data.user_image ? placeholder : data.user_image}
                width={1200}
                height={1200}
                alt="user-image"
                className="h-20 w-20 rounded-lg bg-transparent object-cover"
                />}
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
          <p className="font-bold mt-5">{data.first_name ? `${data.first_name} ${data.last_name}` : <Skeleton width={300} height={'2rem'} />}</p>
          <p className="text-sm text-slate-400">{data.phone ? data.phone : <Skeleton width={100}/>}</p>

          <div className="mt-4">
            <Link href="profile/personal-information" className="font-bold text-sm mt-2 bg-slate-300 w-80 flex justify-between px-2 rounded-lg py-3">
              Personal Information
              <BsArrowRight size={20} />
            </Link>
            <Link href="profile/change-password" className="font-bold text-sm mt-4 bg-slate-300 w-80 flex justify-between px-2 rounded-lg py-3">
              Change Password
              <BsArrowRight size={20} />
            </Link>
            <Link href="profile/change-pin" className="font-bold text-sm mt-4 bg-slate-300 w-80 flex justify-between px-2 rounded-lg py-3">
              Change PIN
              <BsArrowRight size={20} />
            </Link>
            <button onClick={() => {
              localStorage.removeItem('@fazzLogin')
              deleteCookie("login");
              router.push('/')
            }} className="font-bold text-sm mt-4 bg-slate-300 w-80 flex justify-between px-2 rounded-lg py-3">
              Logout
              <BsArrowRight size={20} className="text-slate-300" />
            </button>
          </div>
        </div>
      </main>
      <footer>
        <FooterAfterLogin />
      </footer>
    </div>
  );
}
