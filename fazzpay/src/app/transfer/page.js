"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Placeholder from "../../assets/img/placeholder.jpg";
import MainMenu from "../../components/MainMenu";
import Link from "next/link";
import Header from "../../components/Header";
import FooterAfterLogin from "../../components/FooterAfterLogin";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/action/user";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Transfer() {
  // get all user data
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userData);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getAllUser(search, page));
  }, [search, page, dispatch]);

  return (
    <div className="font-nunito bg-[#e5e5e5] h-full">
      <header className="px-10 py-6 bg-white">
        <Header />
      </header>
      <div
        id="content"
        className="w-full lg:flex justify-center px-5 content-center "
      >
        <div className="hidden lg:block">
          <MainMenu />
        </div>
        <main className="w-full relative mt-10 bg-white p-5 rounded-lg shadow-2xl">
          <p className="text-xl font-bold">Search Receiver</p>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            className="bg-slate-300 mt-5 rounded-lg p-2 w-full"
            placeholder="search receiver here"
          />

          {data.data &&
            data.data.map((item, index) => {
              if (
                item.user_id !=
                JSON.parse(localStorage.getItem("@fazzLogin")).user.user_id
              ) {
                return (
                  <Link
                    key={index}
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
                );
              }
            })}
          {/* pagination */}
          <div className="absolute bottom-10 flex justify-center gap-2 w-full items-center">
            <div className="bg-white relative text-primary border-2 border-primary h-6 w-6 rounded-full hover:scale-110 duration-150 focus:scale-100">
              <AiOutlineLeft onClick={() => {
                page === 1 ? setPage(1) : setPage(page -1)
              }} className="inset-center" />
            </div>
            <div className="bg-primary relative text-white h-8 w-8 rounded-full">
              <p className="inset-center">{page}</p>
            </div>
            <div className="bg-white relative text-primary border-2 border-primary h-6 w-6 rounded-full hover:scale-110 duration-150">
              <AiOutlineRight onClick={() => {
                setPage(page + 1)
              }} className="inset-center" />
            </div>
          </div>
        </main>
      </div>
      <div className="mt-20">
        <FooterAfterLogin />
      </div>
    </div>
  );
}
