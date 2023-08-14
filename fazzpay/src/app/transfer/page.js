"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Placeholder from "../../assets/img/placeholder.jpg";
import MainMenu from "@/app/components/MainMenu";
import Link from "next/link";
import Header from "@/app/components/Header";
import FooterAfterLogin from "@/app/components/FooterAfterLogin";

export default function Transfer() {
  const [users, setUsers] = useState({
    data: [],
  });

  useEffect(() => {
    axios({
      url: `https://fazz.adaptable.app/api/v1/user`,
      method: "GET",
    })
      .then((res) => {
        setUsers({
          ...users,
          data: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  });
  return (
    <div className="font-nunito bg-[#e5e5e5] h-full">
      <header className="px-10 py-6 bg-white">
        <Header />
      </header>
      <div id="content" className="w-full flex justify-center content-center">
        <div className="">
          <MainMenu />
        </div>
        <main className="w-full mt-10 bg-white p-5 rounded-lg shadow-2xl">
          <p className="text-xl font-bold">Search Receiver</p>
          <input
            type="text"
            className="bg-slate-300 mt-5 rounded-lg p-2 w-full"
            placeholder="search receiver here"
          />

          {users.data && users.data.map((item, index) => {
            if(item.user_id != JSON.parse(localStorage.getItem('@fazzLogin')).user.user_id) {
              return (
                <Link key={index}
                href={`/transfer/${item.user_id}`}
                className="flex m-4 gap-4 cursor-pointer"
              >
               <Image
                alt="user-picture"
                  src={
                    item.user_image === null
                      ? Placeholder
                      : `${item.user_image}`
                  }
                  className="h-16 w-16 rounded-md"
                  width={200}
                  height={200}
                  priority
                />
                <div className="flex flex-col gap-2 justify-center">
                  <p className="font-bold">{`${item.first_name} ${item.last_name}`}</p>
                  <p className="text-xs text-slate-400">
                    {item.phone === null ? "-" : item.phone}
                  </p>
                </div>
              </Link>
              )
            }
          })}
        </main>
      </div>
      <div className="mt-20">
        <FooterAfterLogin />
      </div>
    </div>
  );
 }